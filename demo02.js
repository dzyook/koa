const Koa =require('koa')
const app = new Koa()
app.use(async(ctx) => {
  let url = ctx.url
  let request = ctx.request
  let req_query = request.query //接受参数 get请求通过request 接收
  let req_querystring = request.querystring

  ctx.body={
    url,
    req_query,
    req_querystring
  }
})

app.listen(3000, () => {
  console.log('demo2 start')
})