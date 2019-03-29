class customeORM {
  getPaginate(Model, req, res) {
    if (req.query.page < 1) {
      res.status(400).json({ message: 'page should greater than 0' });
    }
    Model
      .fetchAll()
      .then(function(collection){
          var totalcount = collection.length
          collection.query(function(qb){
              qb.limit(req.query.limit).offset((req.query.page - 1) * req.query.limit)
          })
          .fetch()
          .then(function(new_collection){
              let totalPage = Math.ceil(totalcount/req.query.limit)
              res.json({
                  data: new_collection,
                  paggination: {
                      total: totalcount,
                      totalPage: totalPage,
                      currentPage: req.query.page,
                      nextPage: req.query.page < totalPage ? parseInt(req.query.page) + 1 : null,
                      prevPage: req.query.page > 1 ? req.query.page - 1 : null
                  }
              })
          })
          .catch((err) => {
            res.status(400).json(err);
          })
      })
  }
  getOne(Model, req, res) {
    Model
      .where({'id': req.params.photoId})
      .fetch()
      .then((response) => {
          if (response) {
              res.json(response)
          } else {
              res.status(404).send("Not found")
          }      
      })
  }

}
module.exports = customeORM