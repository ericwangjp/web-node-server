// 通过再终端中执行 node ./index.js 启动服务
const express = require('express')
const compression = require('compression')
const app = express()

app.use(compression())
app.use(express.static('./dist'))

// http 请求
app.listen(80, () => {
    console.log('web server is running ...')
})




// 开启gzip压缩：
// 1、安装包  
// npm install compression -D
// 2、导入包：
// const compression = require('compression);
// 3、启用中间件（需要在use express.static(')之前调用）
// app.use(compression())

// 配置HTTPS SSL证书 可在freessl.cn获取免费HTTPS证书
// const https = require('https')
// const fs = require('fs')
// const options = {
//     cert: fs.readFileSync('./full_chain.pem'), //公钥
//     key: fs.readFileSync('./private.key') // 私钥
// }
// https.createServer(options, app).listen(443);

// pm2管理运行的应用(关掉终端服务仍然可运行)
// 服务器安装包：npm i pm2 -g
// 启动项目：pm2 start 脚本 --name 自定义名称
// 查看运行项目：pm2ls
// 重启项目：pm2 restart 自定义名称
// 停止项目：pm2 stop 自定义名称
// 删除项目：pm2 delete 自定义名称