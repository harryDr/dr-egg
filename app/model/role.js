'use strict';

module.exports = app => {
    //定义数据库类型
    const { STRING, INTEGER } = app.Sequelize;

    //定义数据库模型
    const Role = app.model.define('role', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        role: {
            type: STRING(30),
        },
    });

    //数据库之间的关系
    Role.associate = function () {
        Role.belongsToMany(app.model.Authority, { through: app.model.RoleAuthority, foreignKey: "roleId"});
    }

    //强制重新更新数据库
    Role.sync({force: true});   

    return Role;
};