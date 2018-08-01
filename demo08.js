const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()

let sun = new Router()
sun
  .get('/dzy', async(ctx) => {
    ctx.body = 'sun dzy page'
  })

let home = new Router()
home.use('/sun', sun.routes(), sun.allowedMethods())
home
  .get('/dzy', async(ctx) => {
    ctx.body = 'Home dzy page'
  })
  .get('/todo', async(ctx) => {
    ctx.body = 'Home todo page'
  })

let page = new Router()
page
  .get('/dzy', async(ctx) => {
    ctx.body = 'Page dzy page'
  })
  .get('/todo', async(ctx) => {
    ctx.body = 'page todo page'
  })

//父级路由
let router = new Router()
//装载路由
router.use('/home', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

app
  .use(router.routes())
  .use(router.allowedMethods()) //遵循请求方式 get/post 返回404

app.listen(3000, () => console.log('start'))
