const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const Restaurant = require('../restaurant')
const User = require('../user')
const restaurantList = require('../../restaurant.json').results
const db = require('../../config/mongoose')
const SEED_USER = [
  { name: 'user1', email: 'user1@example.com', password: '12345678', restaurantId: [1, 2, 3] },
  { name: 'user2', email: 'user2@example.com', password: '12345678', restaurantId: [4, 5, 6] }
]

// 連線成功
db.once('open', () => {
  bcrypt
    .genSalt(10)
    .then(salt => {
      return Promise.all(Array.from(
        { length: 1 },
        (_, i) => bcrypt.hash(SEED_USER[i].password, salt)
      ))
    })
    .then(hash => {
      return Promise.all(Array.from(
        { length: 2 },
        (_, i) => User.create({
          name: SEED_USER[i].name,
          email: SEED_USER[i].email,
          password: hash[0]
        })
      ))
    })

    .then(user => {
      return Promise.all(
        user.map(hi => {
          console.log(hi)
          SEED_USER.map(seedUser => {
            restaurantList.map(data => {
              if (hi.email == seedUser.email && seedUser.restaurantId.includes(data.id)) {
                data.userId = hi._id
                console.log(data)
                return Restaurant.create(data)
              }
            })
          })
        })
      )
    })
    .then(() => {
      console.log('done.')
      setTimeout(() => {
        process.exit()
      }, '1500')
    })
})
