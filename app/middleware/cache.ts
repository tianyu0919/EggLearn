/*
 * @Author: 卢天宇
 * @Date: 2024-11-12 17:41:12
 * @Description: 设置缓存中间件
 */
import { Context, Next } from "koa";
module.exports = () => {
  return async (ctx: Context, next: Next) => {
    console.log("cache middleware");
    console.log(ctx);
    await next();
  };
};
