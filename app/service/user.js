'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    async getUser(id) {
        let { ctx } = this;
        return ctx.app.model.User.findOne({ where: { id: id } ,include:{
            model:ctx.app.model.Role
        }})
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
            return 'no user'
        } else if (body.password === userName.password) {
            return '登录成功'
        } else {
            return '密码错误'
        }
    }
}

module.exports = UserService;
