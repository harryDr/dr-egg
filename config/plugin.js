'use strict';

// /** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
//   // swaggerdoc = {
//   //   enable: true,
//   //   package: 'egg-swagger-doc',
//   // },
//   sequelize = {
//     enable: true,
//     package: 'egg-sequelize'
//   }
// };
exports.swaggerdoc = {
  enable: true,
  package: 'egg-swagger-doc',
}

exports.sequelize = {
  enable: true,
  package: 'egg-sequelize'
}

exports.jwt = {
  enable: true,
  package: "egg-jwt"
};