'use strict';

const Controller = require('egg').Controller;
/**
 * @Controller 权限操作
 */
class AuthorityController extends Controller {
    /**
	 * @Router get /api/authority
	 * @Request query string *authorityId eg:1 authorityId
	 * @Response 200 baseResponse OK
	 */
    async getAuthority() {
        const { ctx, service } = this
        ctx.body = await service.authority.getAuthority(ctx.query.authorityId)
    }

    /**
    * @Router post /api/authority
    * @Request body createAuthority 新增权限
    * @Response 200 baseResponse OK
    */
    async createAuthority() {
        const { ctx, service } = this
        ctx.body = await service.authority.createAuthority(ctx.request.body)
    }
    /**
    * @Router put /api/authority
    * @Request query string *authorityId eg:1 authorityId
    * @Request body createAuthority 修改权限
    * @Response 200 baseResponse OK
    */
    async updateAuthority() {
        const { ctx, service } = this
        ctx.body = await service.authority.updateAuthority(ctx.query.authorityId,ctx.request.body)
    }
    /**
    * @Router delete /api/authority
    * @Request query string *authorityId eg:1 authorityId
    * @Response 200 baseResponse OK
    */
    async deleteAuthority() {
        const { ctx, service } = this
        ctx.body = await service.authority.deleteAuthority(ctx.query.authorityId)
    }
}

module.exports = AuthorityController;
