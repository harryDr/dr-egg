'use strict';

module.exports = {
  baseResponse: {
    result: { type: 'boolean', required: true },
    message: { type: 'string' },
  },
  createUser: {
    username: { type: 'string', required: true, example: '张三' },
    password: { type: 'string', required: true, example: '123123' },
    roleId: { type: 'string', required: true, example: '1' }
    // created_at: { type: 'Date' },
    // updated_at: { type: 'Date' },
  },
  loginForm: {
    username: { type: 'string', required: true, example: '张三' },
    password: { type: 'string', required: true, example: '123123' },
  },
  createRole: {
    role: { type: 'string', required: true, example: '管理员' },
  },
  // createShop: {
  //   shopId: { type: 'string', required: true, example: '1' },
  //   shopNametrue: { type: 'string', required: true },
  //   resourceType: { type: 'string', required: true, enum: ['video', 'game', 'image'] },
  //   shopCategory: { type: 'array', itemType: 'string' },
  // },
};