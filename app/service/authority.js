'use strict';

const Service = require('egg').Service;
const { ERROR, SUCCESS } = require('../util/util');

class AuthorityService extends Service {
    async getAuthority(id) {
        const { ctx } = this;
        try {
            const authority = await ctx.app.model.Authority.findOne({ where: { id: id } });
            if (authority) {
                return Object.assign({
                    data: authority,
                }, SUCCESS);
            } else {
                return Object.assign(ERROR, {
                    msg: 'not found',
                });
            }
        } catch (error) {
            ctx.status = 500;
            throw (error);
        }
    }
    async createAuthority(body) {
        const { ctx } = this;
        try {
            const authority = await ctx.app.model.Authority.create(body);
            return Object.assign({
                data: authority,
            }, SUCCESS);
        } catch (error) {
            ctx.status = 500;
            throw (error);
        }
    }

    async updateAuthority(id, body) {
        const { ctx } = this;
        const authority = await ctx.app.model.Authority.findOne({ where: { id: id } });
        if (!authority) {
            return Object.assign(ERROR, {
                msg: 'not found',
            });
        }
        await authority.update(body)
        return SUCCESS
    }
    async deleteAuthority(id) {
        const { ctx } = this;
        const authority = await ctx.app.model.Authority.findOne({ where: { id: id } });
        if (!authority) {
            return Object.assign(ERROR, {
                msg: 'not found',
            });
        }
        await authority.destroy();
        return Object.assign(SUCCESS, {
            msg: 'delete ok',
        });
    }
}

module.exports = AuthorityService;
