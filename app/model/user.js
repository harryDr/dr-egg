'use strict';

module.exports = app => {
    //定义数据库类型
    const { STRING, INTEGER, DATE } = app.Sequelize;

    //定义数据库模型
    const User = app.model.define('users', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: STRING(30),
        password: STRING(30),
        // created_at: DATE,
        // updated_at: DATE,
    });

    //数据库之间的关系
    User.associate = function () {
        // app.model.Post.belongsTo(app.model.User, { as: 'user' });
    }

    //强制重新更新数据库
    // User.sync({force: true});   

    return User;
};