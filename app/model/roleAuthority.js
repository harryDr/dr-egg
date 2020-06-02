'use strict';

module.exports = app => {
    //定义数据库类型
    const { STRING, INTEGER } = app.Sequelize;

    //定义数据库模型
    const RoleAuthority = app.model.define('roleAuthority', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        roleId: {
            type: INTEGER,
            
        },
        authorityId: {
            type: INTEGER,
        },
    });

    //数据库之间的关系
    RoleAuthority.associate = function () {
        // Authority.belongsToMany(app.model.Role, { through:'roleAuthorty',foreignKey:"authorityId" });
    }

    //强制重新更新数据库
    RoleAuthority.sync({force: true});   

    return RoleAuthority;
};