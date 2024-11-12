const BaseController = require('egg').Controller

class HomeController extends BaseController {
  async index() {
    const { ctx } = this
    ctx.body = 'hi, egg'
  }
}

module.exports = HomeController
