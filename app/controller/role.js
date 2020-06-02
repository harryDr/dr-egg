'use strict';

/**
 * @Controller 角色管理
 */
const Controller = require('egg').Controller;

class RoleController extends Controller {
	/**
	 * @Router get /api/role
	 * @Request query string *roleId eg:1 roleId
	 * @Response 200 baseResponse OK
	 */
	async getRole() {
		const { ctx, service } = this
		let res = await service.role.getRole(ctx.query.roleId)
		console.log(res)
		ctx.body = {
			result: res,
			message: 'ok'
		}
	}

	/**
	 * @Router post /api/role
	 * @Request body createRole  创建role
	 * @Response 200 baseResponse OK
	 */
	async createRole() {
		const { ctx, service } = this
		let res = await service.role.createRole(ctx.request.body)
		ctx.body = {
			result: res,
			message: 'ok'
		}
	}

	/**
	 * @Router put /api/role
	 * @Request query string *roleId eg:1 roleId
	 * @Request body createRole 
	 * @Response 200 baseResponse OK
	 */
	async updateRole() {
		const { ctx, service } = this
		let res = await service.role.updateRole(ctx.query.roleId,ctx.request.body)
		ctx.body = {
			result: res,
			message: 'ok'
		}
	}

	/**
	 * @Router delete /api/role
	 * @Request query string *roleId eg:1 roleId
	 * @Response 200 baseResponse OK
	 */
	async deleteRole() {
		const { ctx, service } = this
		let res = await service.role.deleteRole(ctx.query.roleId)
		ctx.body = {
			result: res,
			message: 'ok'
		}
	}
}

module.exports = RoleController;
