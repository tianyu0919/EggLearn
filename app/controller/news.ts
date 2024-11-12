const NewsControllerForEgg = require('egg').Controller

class NewsController extends NewsControllerForEgg {
  async list() {
    const dataList = {
      list: [
        { id: 1, title: 'This is news 1', url: '/news/1' },
        { id: 2, title: 'This is news 2', url: '/news/2' },
      ],
    }

    await this.ctx.render('news/list.tpl', dataList)
  }

  async detail(...args: any[]) {
    console.log(args)
    const { ctx } = this
    const { id } = ctx.params
    const data = {
      content: 'This is news detail page, id is ' + id,
    }
    await this.ctx.render('news/detail.tpl', data)
  }
}

module.exports = NewsController
