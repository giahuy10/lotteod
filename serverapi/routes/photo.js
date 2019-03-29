module.exports = function(app) {
  let photoCtrl = require('../controllers/photo');

  // todoList Routes
  app.route('/photos')
    .get(photoCtrl.get)
    .post(photoCtrl.store);

  app.route('/photos/:photoId')
    .get(photoCtrl.detail)
    .put(photoCtrl.update)
    .delete(photoCtrl.delete);
};