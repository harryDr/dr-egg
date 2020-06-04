# dr-egg

## Project setup

``` 
npm install
```

### Compiles and hot-reloads for development

``` 
npm run dev
```

### egg-swagger-doc 使用

``` js
    npm i egg - swagger - doc--save 安装

    config / plugin.js 加入插件
    exports.swaggerdoc = {
        enable: true,
        package: 'egg-swagger-doc',
    }

    /config/config.default.js
```

### sequlize 使用

``` js
    安装 sequlize 和数据库mysql
    $ npm i--save egg - sequelize
    $ npm i--save mysql2 # 针对mysql和mariadb

    config / plugin.js: //使用插件
        exports.sequelize = {
            enable: true,
            package: 'egg-sequelize'
        }

    config.default.js: //配置数据库信息
        config.sequelize = {
            dialect: 'mysql', // 支持: mysql, mariadb, postgres, mssql
            database: 'test',
            host: 'localhost',
            port: '3306',
            username: 'root',
            password: '111111',
        }
```

    使用：在app/model中创建模型以及 associate（数据库表之间的关系 1对多 多对多···）

        * 1对多 在多的那个表新建外键  源模型.关系（目标模型）   belongsTo在源模型上 hasMany在目标上   

            Cannot add foreign key constraint -> foreignKey: 'roleId', constraints: false
            error at post:/api/role ,the type of request parameter does not exit -> contract中参数没定义

``` js

```

        * 多对多 需要建立一个中间表 through 对应的是中间表  foreignKey 对应当前表的外键

        Authority.belongsToMany(app.model. Role, { through: app.model. RoleAuthority}); 
        Role.belongsToMany(app.model. Authority, { through: app.model. RoleAuthority, foreignKey: "roleId"}); 
        中间表需要一个id和两个关联表的外键

        在需要的时候异步更新数据库（强制跟新表）
        service中进行数据的操作

        获取三种不同方式的参数：
        get: query(?xxx=xxx&yy=yy) 使用ctx.query.xx
        get: params(/xx)  使用ctx.parmas.xx
        post: post         使用ctx.body 



### util 工具的引入 Object.assign(目标，...源) 将源中的合并到目标对象中
    service中使用
