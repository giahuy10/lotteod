const db = require('../db')
const bookshelf = require('../orm')
const customeORM = require('../orm/custom.js')
const Model = new customeORM()
bookshelf.plugin(require('../orm/paginate'));
const Photo = bookshelf.Model.extend({ tableName: 'xpzqs_od_photo_image' })
module.exports = {
    get: (req, res) => {
        Model.getPaginate(Photo, req, res);
    },
    detail: (req, res) => {
        Model.getOne(Photo, req, res);
    },
    update: (req, res) => {
        let data = req.body;
        let photoId = req.params.photoId;
        let sql = 'UPDATE xpzqs_od_photo_image SET ? WHERE id = ?'
        db.query(sql, [data, photoId], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO xpzqs_od_photo_image SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM xpzqs_od_photo_image WHERE id = ?'
        db.query(sql, [req.params.photoId], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}