const express = require('express')
const session = require('express-session')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const usePassport = require('./config/passport')
require('./config/mongoose')
const bodyParser = require('body-parser')

// 載入 method-override
const methodOverride = require('method-override')
// 引用路由器
const routes = require('./routes')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(session({
  secret: 'ThisIsMySecret',
  resave: false,
  saveUninitialized: true
}))
usePassport(app)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {
  // 你可以在這裡 console.log(req.user) 等資訊來觀察
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  next()
})

// 設定每一筆請求都會透過 methodOverride 進行前置處理
app.use(methodOverride('_method'))
// 將 request 導入路由器
app.use(routes)
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
