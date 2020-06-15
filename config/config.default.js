/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1588493371806_752';

  // add your middleware config here
  config.middleware = ['jwtDr'];
  config.jwtDr = {
    ignore: (ctx) => {
      if (ctx.request.url.indexOf('swagger') > 0 || ctx.request.url.indexOf('login') > 0) {
        return true
      } else {
        return false
      }
    }
    // ignore: ['/api/login','^\/swagger','/swagger-ui-bundle.js','/swagger-ui-standalone-preset.js','/swagger-ui.css','/swagger-ui.html']
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  //swagger
  config.swaggerdoc = {
    dirScanner: './app/controller',
    apiInfo: {
      title: 'egg-swagger',
      description: 'swagger-ui for egg',
      version: '1.0.0',
    },
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    securityDefinitions: {
      // apikey: {
      //   type: 'apiKey',
      //   name: 'clientkey',
      //   in: 'header',
      // },
      // oauth2: {
      //   type: 'oauth2',
      //   tokenUrl: 'http://petstore.swagger.io/oauth/dialog',
      //   flow: 'password',
      //   scopes: {
      //     'write:access_token': 'write access_token',
      //     'read:access_token': 'read access_token',
      //   },
      // },
    },
    enableSecurity: false,
    // enableValidate: true,
    routerMap: false,
    enable: true,
  };

  //sequlize
  config.sequelize = {
    dialect: 'mysql', // 支持: mysql, mariadb, postgres, mssql
    database: 'test',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: '111111',
  };

  config.multipart = {
    // mode: 'file', //默认为stream模式  还可以为file模式
    whitelist: [
      '.png',
      '.txt',
      '.jpg',
    ],
    // fileSize: '50mb', //文件大小
  };

  config.jwt = {
    secret: "123456"
  }

  return {
    ...config,
    ...userConfig,
  };
};
