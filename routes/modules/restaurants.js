const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

// 前往新增頁面
router.get('/new', (req, res) => {
  return res.render('new')
})

// 建立餐廳
router.post('/', (req, res) => {
  const userId = req.user._id
  const all = req.body
  console.log(all)
  console.log('userId:', userId)
  return Restaurant.create({ ...all, userId }) // 存入資料庫
    .then(() => res.redirect('/')) // 新增完成後導回首頁
    .catch(error => console.log(error))
})

// 瀏覽單一餐廳
router.get('/:restaurant_id', (req, res) => {
  const userId = req.user._id
  const id = req.params.restaurant_id
  return Restaurant.findOne({ id, userId })
    .lean()
    .then((restaurant) => res.render('show', { restaurant }))
    .catch(error => console.log(error))
})

// 編輯單一餐廳-Get
router.get('/:restaurant_id/edit', (req, res) => {
  const userId = req.user._id
  const id = req.params.restaurant_id
  return Restaurant.findOne({ id, userId })
    .lean()
    .then((restaurant) => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})

// 編輯單一餐廳-Post
router.put('/:restaurant_id', (req, res) => {
  const userId = req.user._id
  const id = req.params.restaurant_id
  return Restaurant.findOne({ id, userId })
    .then(restaurant => {
      restaurant = Object.assign(restaurant, req.body)
      return restaurant.save()
    })
    .then(() => res.redirect(`/restaurants/${id}`))
    .catch(error => console.log(error))
})

// 刪除餐廳
router.delete('/:restaurant_id', (req, res) => {
  const userId = req.user._id
  const id = req.params.restaurant_id
  return Restaurant.findOne({ id, userId })
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router
