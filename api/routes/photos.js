var express = require('express');
var router = express.Router();
var model = require('../models/photo')
var multer   =  require( 'multer' );
var moment = require('moment');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'static/img/galleries')
  },
  filename: function (req, file, cb) {
    cb(null, moment().format('YYYY-MM-DD') +"-"+file.originalname);
  }
})

var upload   =  multer( {storage: storage} );
var sizeOf   =  require( 'image-size' );


require( 'string.prototype.startswith' );
router
  .get('/', (req, res) => {
    model.find().sort('-dateAdded').exec((err, items) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ items });
    });
  })
  .get('/:slug', (req, res) => {
    model.findOne({ slug: req.params.slug}).sort('-dateAdded').exec((err, item) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ item });
    });
  })
  .post('/', (req, res) => {
    let Newuser = {
      "state": 1,
      "full": req.body.full,
      "thumbnail": req.body.thumbnail
    }
    model.collection.insertOne(Newuser)
      .then((data)=>{
        res.json(data)
      }).catch((err)=>{
        res.status(500).json(err);
    })
  })
  .post( '/upload', upload.single( 'file' ), function( req, res, next ) {

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

module.exports = router;