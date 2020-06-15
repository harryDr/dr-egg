'use strict';

const Service = require('egg').Service;
const { ERROR, SUCCESS } = require('../util/util');

class UserService extends Service {
    async getUser(id) {
        let { ctx } = this;
        return ctx.app.model.User.findOne({
            where: { id: id }, include: {
                model: ctx.app.model.Role
            }
        })
    }
    async createUser(body) {
        let { ctx } = this;
        return ctx.app.model.User.create(body)
    }
    async updateUser(id, body) {
        let { ctx } = this;
        console.log(id)
        let user = await ctx.app.model.User.findOne({ where: { id: id } })
        if (!user) {
            this.ctx.throw(404, 'user not found');
        }
        return user.update(body)
    }

    async deleteUser(id) {
        let { ctx } = this;
        console.log(id)
        let user = await ctx.app.model.User.findOne({ where: { id: id } })
        if (!user) {
            this.ctx.throw(404, 'user not found');
        }
        return user.destroy()
    }
    async login(body) {
        let { ctx } = this;
        console.log(body)
        let userName = await ctx.app.model.User.findOne({ where: { username: body.username } })
        if (!userName) {
            return Object.assign(ERROR, {
                msg: 'no user',
            });
        } else if (body.password === userName.password) {
            const token = ctx.app.jwt.sign({
                ...ctx.request.body,
              }, this.app.config.jwt.secret, {
                expiresIn: '60m', // 时间根据自己定，具体可参考jsonwebtoken插件官方说明
              });

            return Object.assign(SUCCESS, {
                msg: '登录成功',
                data: {'userName':userName.username,'token':token}
            })
        } else {
            return Object.assign(ERROR, {
                msg: '密码错误',
            });
        }
    }
}

module.exports = UserService;
