'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.redirect('/swagger', '/swagger-ui.html');

  //user
  router.get('/api/user', controller.user.getUser);
  router.post('/api/user', controller.user.createUser);
  router.put('/api/user', controller.user.updateUser);
  router.delete('/api/user', controller.user.deleteUser);
};
