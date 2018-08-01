const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router({
  // prefix: '/dzy' 层级 /dzy第一层 开头
})

router
  .get('/', (ctx, next) => {
    ctx.body = 'hello dzy'
  })
  .get('/todo', (ctx, next) =>{
    ctx.body = 'todo'
  })

app
  .use(router.routes())
  .use(router.allowedMethods()) //遵循请求方式 get/post 返回404

app.listen(3000, () => console.log('start'))
