import { Context, Next } from 'koa'
module.exports = () => {
  return async function optionsHandler(ctx: Context, next: Next) {
    if (ctx.method === 'OPTIONS') {
      ctx.set('Access-Control-Allow-Origin', 'http://example.com') // 或者使用 '*'
      ctx.set('Access-Control-Allow-Methods', 'GET,HEAD,PUT,POST,DELETE,PATCH')
      ctx.set('Access-Control-Allow-Headers', 'Content-Type,Authorization,Your-Custom-Header')
      ctx.set('Access-Control-Allow-Credentials', 'true') // 如果需要携带凭证
      ctx.status = 204 // No Content
    } else {
      await next()
    }
  }
}
