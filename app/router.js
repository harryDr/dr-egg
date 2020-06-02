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
  //login
  router.post('/api/login',controller.user.login)

  //role
  router.get('/api/role', controller.role.getRole);
  router.post('/api/role', controller.role.createRole);
  router.put('/api/role', controller.role.updateRole);
  router.delete('/api/role', controller.role.deleteRole);

};
