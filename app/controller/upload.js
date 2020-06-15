'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');
const pump = require('pump')

/**
 * @Controller Upload
 */
class UploadController extends Controller {
    /**
	 * @Router post /api/upload
	 * @Request formData file *avant eg:avant avant
	 * @Response 200 baseResponse OK
	 */
    async singleUpload() {
        // //使用file mode方式
        // const { ctx, service } = this
        // let stream = await ctx.getFileStream();
        // // 防止上传空文件
        // if (!stream.filename) {
        //     return;
        // }
        // // 文件名，实际项目中文件名要添加时间戳
        // let filename = stream.filename.toLowerCase();

        // // 上传的目录，注意upload目录要存在，实际项目中以云服务器地址为准，入库要替换地址符号
        // let target = 'app/public/img/' + path.basename(filename)
        // // 创建写入流
        // let writeStream = fs.createWriteStream(target);
        // // await pump(stream, writeStream);

        // // 上传超过时长会卡死
        // stream.pipe(writeStream);
        // // try {
        // //     //异步把文件流 写入
        // //     await awaitWriteStream(stream.pipe(writeStream));
        // // } catch (err) {
        // //     //如果出现错误，关闭管道
        // //     await sendToWormhole(stream);
        // //     throw err;
        // // }

        // // // 上传超过时长不会卡死
        // // await pump(stream, writeStream);
        // // 返回上传的信息
        // this.ctx.body = {
        //     // 表单上传的图片
        //     url: target,
        //     // 表单的其它数据
        //     fields: stream.fields
        // }

        ///////////////////////////////////////
        const { ctx } = this;
        const parts = ctx.multipart({ autoFields: true });
        let files = {};
        let stream;
        while ((stream = await parts()) != null) {
            if (!stream.filename) {
                break;
            }
            const fieldname = stream.fieldname; // file表单的名字
            // 上传图片的目录
            console.log(stream.filename)
            // const dir = await this.service.tools.getUploadFile(stream.filename);
            const lessName = stream.filename.split('.')[1]
            const target = 'app/public/img/' + path.basename(fieldname)+'.'+lessName;
            const writeStream = fs.createWriteStream(target);

            await pump(stream, writeStream);

            files = Object.assign(files, {
                [fieldname]: target
            });
        }

        if (Object.keys(files).length > 0) {
            ctx.body = {
                code: 200,
                message: '图片上传成功',
                data: files
            }
        } else {
            ctx.body = {
                code: 500,
                message: '图片上传失败',
                data: {}
            }
        }
        ///////////////////////////////////////


        // const stream = await ctx.getFileStream(); //获取表单提交的数据
        // console.log(stream,'1234')
        // if (!stream.filename) { //注意如果没有传入图片直接返回   
        //     return;
        // }
        // // console.log(JSON.stringify(stream))
        // // 上传目录
        // // "filename":"c:/images/291051166-5b20eca6448e8_articlex.png",  path.basename  => 291051166-5b20eca6448e8_articlex.png
        // const target = 'app/public/admin/upload/' + path.basename(stream.filename);
        // console.log(target)

        // const writeStream = fs.createWriteStream(target);
        // await pump(stream, writeStream); //stream.pipe(writeStream);   //可以用， 但是不建议,因为不能处理失败的情况
        // this.ctx.body = {
        //     url: target,
        //     fields: stream.fields //表单的其他数据
        // }

    }
}

module.exports = UploadController;
