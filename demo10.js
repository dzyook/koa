const Koa = require('koa')
const app = new Koa()
app.use(async(ctx) => {
  if(ctx.url === '/index') {
    ctx.cookies.set(
      'MyName','dzy', {
        domain: '127.0.0.1', //域名
        path: '/index', //路径  不指定则
        maxAge: 1000*60*60*24, //长有效时间
        expires: new Date('2018-12-31'),
        httpOnly: false,//
        overwrite: false //重写
      }
    )            
    ctx.body = 'Cookie is ok'
  }else {
      if(ctx.cookies.get('MyName')) {
        ctx.body = ctx.cookies.get('MyName')
      } else {
        ctx.body = 'Cookie is none'
      }
  }
})

app.listen(3000)