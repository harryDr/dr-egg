'use strict';

module.exports = app => {
    //定义数据库类型
    const { STRING, INTEGER } = app.Sequelize;

    //定义数据库模型
    const Authority = app.model.define('authority', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        authority: {
            type: STRING(30),
        },
        des: {
            type: STRING(30),
        },
    });

    //数据库之间的关系
    Authority.associate = function () {
        Authority.belongsToMany(app.model.Role, { through: app.model.RoleAuthority, foreignKey: "authorityId" });
    }

    //强制重新更新数据库
    Authority.sync({ force: true });

    return Authority;
};