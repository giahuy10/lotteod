var express = require('express');
var router = express.Router();
var model = require('../models/event')
var slug = require('slug')
var multer   =  require( 'multer' );
var moment = require('moment');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'static/img/events')
  },
  filename: function (req, file, cb) {
    cb(null, moment().format('YYYY-MM-DD') +"-"+file.originalname);
  }
})

var upload   =  multer( {storage: storage} );
var sizeOf   =  require( 'image-size' );
router
  .get('/', (req, res) => {
    model.find({ 'state': 1 }).sort('-dateAdded').exec((err, items) => {
      if (err) {
        res.status(500).json(err);
      }
      res.json({ items });
    });
  })
  .get('/:slug', (req, res) => {
    model.findOne({ slug: req.params.slug}).sort('-dateAdded').exec((err, item) => {
      if (err) {
        res.status(500).json(err);
      }
      res.json({ item });
    });
  })
  .post('/', (req, res) => {
    req.body.slug = slug(req.body.title_en)
    model.collection.insertOne(req.body)
      .then((data)=>{
        res.json(req.body.slug)
      }).catch((err)=>{
        res.status(500).json(err);
    })
  })
  .put('/:_id', (req, res) => {
    model.findByIdAndUpdate(
    // the id of the item to find
      req.params._id,
      
      // the change to be made. Mongoose will smartly combine your existing 
      // document with this change, which allows for partial updates too
      req.body,
      
      // an option that asks mongoose to return the updated version 
      // of the document instead of the pre-updated one.
      {new: true},
      
      // the callback function
      (err, todo) => {
      // Handle any possible database errors
          if (err) return res.status(500).json(err);
          return res.json(todo);
      }
    ) 
  })
  .post( '/upload', upload.single( 'file' ), function( req, res ) {

    if ( !req.file.mimetype.startsWith( 'image/' ) ) {
      return res.status( 422 ).json( {
        error : 'The uploaded file must be an image'
      } );
    }

    var dimensions = sizeOf( req.file.path );

    if ( ( dimensions.width < 640 ) || ( dimensions.height < 480 ) ) {
      return res.status( 422 ).json( {
        error : 'The image must be at least 640 x 480px'
      } );
    }

    return res.status( 200 ).send( req.file );
  })
  .delete('/:_id', (req, res) => {
    model.findByIdAndRemove(req.params._id, (err, model) => {
      // As always, handle any potential errors:
      if (err) return res.status(500).json(err);
      // We'll create a simple object to send back with a message and the id of the document that was removed
      // You can really do this however you want, though.
      const response = {
          message: "Item successfully deleted",
          id: model._id
      };
      return res.status(200).json(response);
    })
  })

module.exports = router;