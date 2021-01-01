const port = 3030

const jsonServer = require('json-server')
const bodyParser = require('body-parser')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const allowCors = require('./cors')
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())
server.use(router)

server.listen(port, () => {
  console.log(`O BACKEND está rodando na porta ${port}`)
})