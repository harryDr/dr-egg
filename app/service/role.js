'use strict';

const Service = require('egg').Service;
const { ERROR, SUCCESS } = require('../util/util')

class RoleService extends Service {
    async getRole(id) {
        let { ctx } = this;
        let role = await ctx.app.model.Role.findOne({ where: { id: id }, include: { model: ctx.app.model.Authority } })
        console.log(role)
        if (!role) {
            return 'role not found'
        }
        return role
    }
    async createRole(body) {
        let { ctx } = this;
        // return await ctx.app.model.Role.create(body)
        let role = null
        try {
            role = await ctx.app.model.Role.create(body)
        } catch (error) {
            ctx.status = 500;
            throw (error);
        }
        let authority = await ctx.app.model.Authority.findOne({ where: { id: body.authorityIDs } })
        if (!authority) {
            return Object.assign(ERROR, {
                msg: 'not found'
            })
        }
        await role.addAuthority(authority)
        return SUCCESS
    }
    async updateRole(id, body) {
        //一对多 多个authority
        let { ctx } = this;
        let role = await ctx.app.model.Role.findOne({ where: { id: id } })
        if (!role) {
            this.ctx.throw(404, 'role not found');
        }
        let authority = await ctx.app.model.Authority.findOne({ where: { id: body.authorityIDs } })
        if (!authority) {
            return Object.assign(ERROR, {
                msg: 'not found authority'
            })
        }
        // return '1231231'
        await role.setAuthorities(authority)
        return SUCCESS
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
