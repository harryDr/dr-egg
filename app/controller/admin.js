'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async index() {
    this.ctx.body = 'admin'
  }
}

module.exports = AdminController;
