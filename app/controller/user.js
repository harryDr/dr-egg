'use strict';

const Controller = require('egg').Controller;
/**
 * @Controller 用户
 */
class UserController extends Controller {
	/**
	 * @Router get /api/user
	 * @Request query string *id eg:1 userId
	 * @Response 200 baseResponse OK
	 */
	async getUser() {
		const { ctx, service } = this
		let res = await service.user.getUser(ctx.query.id)
		ctx.body = {
			result: res,
			message: 'ok'
		}
	}

	/**
	 * @Router post /api/user
	 * @Request body createUser  创建user
	 * @Response 200 baseResponse OK
	 */
	async createUser() {
		const { ctx, service } = this
		let res = await service.user.createUser(ctx.request.body)
		ctx.body = {
			result: res,
			message: 'ok'
		}
	}

	/**
	 * @Router put /api/user
	 * @Request query string *userId eg:1 userId
	 * @Request body createUser  创建user
	 * @Response 200 baseResponse OK
	 */
	async updateUser() {
		const { ctx, service } = this
		let res = await service.user.updateUser(ctx.query.userId, ctx.request.body)
		ctx.body = {
			result: res,
			message: 'ok'
		}
	}

	/**
	 * @Router delete /api/user
	 * @Request query string *userId eg:1 userId
	 * @Response 200 baseResponse OK
	 */
	async deleteUser() {
		const { ctx, service } = this
		console.log(ctx.params,ctx.query)
		let res = await service.user.deleteUser(ctx.query.userId)
		ctx.body = {
			result: res,
			message: 'ok'
		}
	}

	/**
	 * @Router post /api/login
	 * @Request body loginForm 登录
	 * @Response 200 baseResponse OK
	 */
	async login(){
		const { ctx, service } = this
		console.log(ctx.request.body)
		let res = await service.user.login(ctx.request.body)
		ctx.body = {
			result: res,
			message: 'ok'
		}
	}
}

module.exports = UserController;

