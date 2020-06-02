'use strict';

const Service = require('egg').Service;

class RoleService extends Service {
    async getRole(id) {
        let { ctx } = this;
        let role = await ctx.app.model.Role.findOne({ where: { id: id } })
        console.log(role)
        if (!role) {
            return 'role not found'
        }
        return role
    }
    async createRole(body) {
        let { ctx } = this;
        return await ctx.app.model.Role.create(body)
    }
    async updateRole(id, body) {
        let { ctx } = this;
        let role = await ctx.app.model.Role.findOne({ where: { id: id } })
        if (!role) {
            this.ctx.throw(404, 'role not found');
        }
        return role.update(body)
    }
    async deleteRole(id) {
        let { ctx } = this;
        let role = await ctx.app.model.Role.findOne({ where: { id: id } })
        if (!role) {
            this.ctx.throw(404, 'role not found');
        }
        return role.destroy()
    }

}

module.exports = RoleService;
