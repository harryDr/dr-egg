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
        username: { type: STRING(30) },
        password: { type: STRING(30) },
        roleId: {
            type: INTEGER,
            allowNull: false,
        }
        // created_at: DATE,
        // updated_at: DATE,
    });

    //数据库之间的关系
    User.associate = () => {
        // user -> role  多 <- 1    源模型.关系（目标模型）   belongsTo在源模型上 hasMany在目标上
        User.belongsTo(app.model.Role, { foreignKey: 'roleId', constraints: false })
    }

    //强制重新更新数据库
    // User.sync({ force: true });

    return User;
};