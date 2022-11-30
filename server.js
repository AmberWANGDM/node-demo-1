var http = request('http')
var port = process.argv[2]

if (!port) {
  console.log('请指定端口号\n 比如 node server.js 8888')
  process.exit(1)
}

var server = http.createServer(function (request, response) {
  var pathWithQuery = request.url
  console.log('有人发请求过来啦,请求路径(带查询参数)为:' + pathWithQuery)

  if (path === '/') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(`
      <!DOCTYPE html>
      <head>
        <link rel="stylesheet" href="/x">
      </head>
      <body>
        <h1>Hello World</h1>
        <script src="/y"></script>
      </body>
    `)
    response.end()
  } else if (path === '/x') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/css;charset=utf-8')
    response.write(`body{color: red;}`)
    response.end()
  } else if (path === '/y') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
    response.write(`console.log('这是 js的内容');`)
    response.end()
  } else {
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(`你输入的路径不存在对应内容`)
    response.end()
  }
})

server.listen(port)
console.log(
  '监听 ' +
    port +
    ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' +
    port
)
