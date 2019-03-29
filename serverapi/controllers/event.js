const util = require('util')
const mysql = require('mysql')
const db = require('../db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM xpzqs_od_event_item'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM xpzqs_od_event_item WHERE id = ?'
        db.query(sql, [req.params.eventId], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let eventId = req.params.eventId;
        let sql = 'UPDATE xpzqs_od_event_item SET ? WHERE id = ?'
        db.query(sql, [data, eventId], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO xpzqs_od_event_item SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM xpzqs_od_event_item WHERE id = ?'
        db.query(sql, [req.params.eventId], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}