const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const Restaurant = require('../restaurant')
const User = require('../user')
const restaurantList = require('../../restaurant.json').results
const db = require('../../config/mongoose')
const SEED_USER = {
  name: 'root',
  email: 'root@example.com',
  password: '12345678'
}

// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
  bcrypt
    .genSalt(10)
    .then(salt => bcrypt.hash(SEED_USER.password, salt))
    .then(hash => User.create({
      name: SEED_USER.name,
      email: SEED_USER.email,
      password: hash
    }))
    .then(user => {
      const userId = user._id
      return Promise.all(Array.from(
        { length: 8 },
        (_, i) => Restaurant.create({ ...restaurantList[i], userId })
      ))
      // Restaurant.create({ ...restaurantList, userId })
      //   .then(() => {
      //     console.log('restaurantSeeder done!')
      //   })
      //   .catch(err => console.log(err))
      // console.log('done')
    })
    .then(() => {
      console.log('done.')
      process.exit()
    })
})
