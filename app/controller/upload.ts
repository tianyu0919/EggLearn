const UploadControllerForEgg = require('egg').Controller
const path = require('path')
const fs = require('fs')

class UploadController extends UploadControllerForEgg {
  async upload() {
    const { ctx } = this
    const file = ctx.request.files[0] // * 取得上传的文件

    try {
      console.log('upload 进来了', this.config.baseDir)
      // * 指定文件存储路径
      const uploadDir = path.join(this.config.baseDir, 'uploads')
      const filePath = path.join(uploadDir, file.filename)

      // * 确保上传目录存在
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir)
      }

      // * 将文件从临时目录移动到指定目录
      await fs.promises.rename(file.filepath, filePath)

      // * 返回上传成功信息
      ctx.body = {
        code: 10000,
        data: {
          taskNo: Math.random().toString(10).slice(2),
        },
        error: null,
      }
    } catch (err) {
      const error = err as Error
      // 处理错误
      ctx.body = {
        code: 10001,
        data: null,
        error: error.message,
      }
    } finally {
      // * 清理临时文件
      await ctx.cleanupRequestFiles()
    }
  }
}

module.exports = UploadController
