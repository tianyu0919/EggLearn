/*
 * @Author: 卢天宇
 * @Date: 2024-11-12 17:32:21
 * @Description:
 */
import { Application } from 'egg'

module.exports = (app: Application) => {
  const { router, controller } = app
  console.log(controller)
  router.get('/', controller.home.index)
  router.get('/news', controller.news.list)
  router.get('/news/:id', controller.news.detail)
  router.post('/upload', controller.upload.upload)
}
