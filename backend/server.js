const port = 3030
const SECRET_KEY = 'GRUPO_BOTICARIO'
const expiresIn = '1h'
const cors = require('cors');

function createToken(payload){
  return jwt.sign(payload, SECRET_KEY, {expiresIn})
}

function verifyToken(token){
  return  jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ?  decode : err)
}

function isAuthenticated({email, password}){
  return userdb.users.findIndex(user => user.email === email && user.password === password) !== -1
}

const jsonServer = require('json-server')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const userdb = JSON.parse(fs.readFileSync('users.json', 'UTF-8'))
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(cors({
  origin: true,
  credentials: true,
  preflightContinue: false,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}))
server.use(queryParser())

server.post('/auth/login', (req, res) => {
  const {email, password} = req.body
  if (isAuthenticated({email, password}) === false) {
    const status = 401
    const message = 'Email e/ou senha inválidos!'
    res.status(status).json({message})
    return
  }
  const token = createToken({email, password})
  res.status(200).json({token})
})

server.post('/auth/validateToken', (req,res) => {
  const { token } = req.body
  try {
    verifyToken(req.headers.authorization.split(' ')[1])
    next()
 } catch (err) {
   const status = 401
   const message = 'Erro: Token inválido!'
   res.status(status).json({status, message})
 }
})

server.use(/^(?!\/auth).*$/,  (req, res, next) => {
  if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
    const status = 401
    const message = 'Você não tem autorização para realizar essa requisição.'
    res.status(status).json({status, message})
    return
  }
  try {
     verifyToken(req.headers.authorization.split(' ')[1])
     next()
  } catch (err) {
    const status = 401
    const message = 'Erro: Token inválido!'
    res.status(status).json({status, message})
  }
})

server.use(router)

server.listen(port, () => {
  console.log(`O BACKEND está rodando na porta ${port}`)
})