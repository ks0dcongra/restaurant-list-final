const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const restaurants = require('./modules/restaurants')
const users = require('./modules/users')
const { authenticator } = require('../middleware/auth')
// 將網址結構符合，字串的 request 導向 home 模組

// 將網址結構符合todos字串開頭的 request 導向 todos 模組
// router.use('/restaurants', restaurants)
// 匯出路由器
router.use('/users', users)
router.use('/', authenticator, home) // 加入驗證程序
router.use('/restaurants', authenticator, restaurants) // 加入驗證程序
router.use('/', authenticator, home)

module.exports = router
