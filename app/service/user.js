'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    async getUser(id) {
        let { ctx } = this;
        return ctx.app.model.User.findOne({ where: { id: id } })
    }
    async createUser(body){
        let { ctx } = this;
        return ctx.app.model.User.create(body)
    }
    async updateUser(id, body){
        let { ctx } = this;
        console.log(id)
        let user = await ctx.app.model.User.findOne({ where: { id: id } })
        if (!user) {
            this.ctx.throw(404, 'user not found');
          }
        return user.update(body)
    }

    async deleteUser(id){
        let { ctx } = this;
        console.log(id)
        let user = await ctx.app.model.User.findOne({ where: { id: id } })
        if (!user) {
            this.ctx.throw(404, 'user not found');
          }
        return user.destroy()
    }   
}

module.exports = UserService;
