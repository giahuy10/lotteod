module.exports = function(app) {
  let eventCtrl = require('../controllers/event');

  // todoList Routes
  app.route('/events')
    .get(eventCtrl.get)
    .post(eventCtrl.store);

  app.route('/events/:eventId')
    .get(eventCtrl.detail)
    .put(eventCtrl.update)
    .delete(eventCtrl.delete);
};