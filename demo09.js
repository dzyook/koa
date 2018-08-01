const Koa = require('koa')
const Router = require('koa-router')
// const bodyparser = require('koa-bodyparser')

const app = new Koa()
const router = new Router()
// app.use(bodyparser())

router.get('/', (ctx, netx) => {
  console.log(ctx.request)
  ctx.body = ctx.query
})

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000, () => {
  console.log('start 3000')
})
