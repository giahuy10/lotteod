module.exports = function(app) {
  let eventCtrl = require('../controllers/event');

  // todoList Routes
  app.route('/reservation')
    .get(eventCtrl.get)
    .post(eventCtrl.store);

  app.route('/reservation/:eventId')
    .get(eventCtrl.detail)
    .put(eventCtrl.update)
    .delete(eventCtrl.delete);
};