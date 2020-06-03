'use strict';

module.exports = app => {
    //定义数据库类型
    const { STRING, INTEGER } = app.Sequelize;

    //定义数据库模型
    const RoleAuthority = app.model.define('roleAuthority', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        roleId: {
            type: INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        authorityId: {
            type: INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    },
        {
            timestamps: false,
            underscored: true,
            // paranoid: true,
            freezeTableName: true,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        }
    );

    //数据库之间的关系
    RoleAuthority.associate = function () {
        // Authority.belongsToMany(app.model.Role, { through:'roleAuthorty',foreignKey:"authorityId" });
    }

    //强制重新更新数据库
    // RoleAuthority.sync({ force: true });

    return RoleAuthority;
};