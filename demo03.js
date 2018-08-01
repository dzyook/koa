const Koa = require('koa')
const app = new Koa()
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
    let postData = await parsePostData(ctx)
    console.log(ctx.req)
      ctx.body = postData
  }else {
    ctx.body = '<h1>404!</hi>'
  }
})

function parsePostData(ctx) {
  return new Promise((resolve,reject) => {
    try{
      let postdata = "";
      ctx.req.addListener('data',(data) => { //监听事件 当有数据传入时候
        postdata += data
      })
      ctx.req.on('end', () => { //结束时候监听
        let parseData = parseQueryStr(postdata)
        resolve(parseData)
      })
    }catch(error) {
      reject(error)
    }
  })
}

function parseQueryStr(queryStr) {
  let queryData = {}
  // console.log(queryStr)
  let queryStrList = queryStr.split('&')
  // console.log(queryStrList)
  // console.log(queryStrList.entries())
  for(let [index,query] of queryStrList.entries()) {//entries返回一个带索引的数组
    let itemList = query.split('=')
    // console.log(itemList)
    queryData[itemList[0]] = decodeURIComponent(itemList[1]) //对url进行解码
  }
  // console.log(queryData)
  return queryData
} 

app.listen(3000)