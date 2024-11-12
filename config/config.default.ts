/*
 * @Author: 卢天宇
 * @Date: 2024-11-12 17:38:17
 * @Description:
 */
import { EggAppConfig, PowerPartial } from "egg";

module.exports = (appInfo: EggAppConfig) => {
  const config = {} as PowerPartial<EggAppConfig>;
  config.keys = appInfo.name + "-1699684697182";

  config.cluster = {
    listen: {
      port: 9527,
    },
  };
  return config;
};
