/*
 * @Author: 卢天宇
 * @Date: 2024-11-12 17:38:17
 * @Description:
 */
import { EggAppConfig, PowerPartial } from 'egg'

module.exports = (appInfo: EggAppConfig) => {
  const config = {} as PowerPartial<EggAppConfig>
  config.keys = appInfo.name + '-1699684697182'

  config.cluster = {
    listen: {
      port: 9527,
    },
  }

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  }

  // * 上传图片
  config.multipart = {
    mode: 'file',
    fileSize: '5mb',
    whitelist: ['.jpg', '.png', '.jpeg', '.xlsx', '.xls'],
  }

  // * 跨域配置
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  }

  // * 安全配置
  config.security = {
    csrf: {
      enable: false,
    },
  }

  return config
}

exports.mu
