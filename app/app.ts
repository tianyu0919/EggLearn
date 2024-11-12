/*
 * @Author: 卢天宇
 * @Date: 2024-11-12 17:44:21
 * @Description:
 */
import { Application } from "egg";

module.exports = (app: Application) => {
  app.config.coreMiddleware.push("cache");
};
