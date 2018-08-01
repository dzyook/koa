const Koa = require('koa')
const app = new Koa()
const bodyparser = require('koa-bodyparser')

app.use(bodyparser())
app.use(async(ctx) => {
  if(ctx.url === '/' && ctx.method === 'GET') {
      //显示表单页面
      let html = `
            <h1>DZY koa2 request POST</h1>
            <form method="POST" action="/">
                <p>userName</p>
                <input name="userName" /><br/>
                <p>age<p>
                <input name="age" /><br/>
                <p>website<p>
                <input name="website" /><br/>
                <button type="submit">submit</button>
              </form>
      `
      ctx.body = html
  }else if(ctx.url === '/' && ctx.method === 'POST') {
    console.log(ctx.request)
    let postData = ctx.request.body
      ctx.body = postData
  }else {
    ctx.body = '<h1>404!</hi>'
  }
})

app.listen(3000)