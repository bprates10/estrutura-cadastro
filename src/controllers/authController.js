const express = require('express')
// const bcryptjs = require('bcryptjs')
const User = require('../models/User')

const router = express.Router()

router.post('/register', async (req, res) => {

  try {
    const res = await User.findOne({
      email
    })
    return res.send('bololo')
    if (await User.findOne({
        email
      }))
      return res.status(400).send({
        error: 'Email já cadastrado'
      })

    const user = await User.create(req.body)

    user.password = undefined

    return res.send({
      user
    })
  } catch (err) {
    return res.status(400).send({
      err: 'Falha ao se conectar com o banco de dados'
    })
  }
})

// router.get('/', (req, res) => {
//   res.send('ololo')
// })

// router.post('/authenticate', async (req, res) => {
//   const {
//     email,
//     password
//   } = req.body
//   // buscando por usuario - acrescentando o password (por default nao está sendo retornado)
//   const user = await User.findOne({
//     email
//   }).select('+password')

//   if (!user) {
//     return res.status(400).send({
//       error: 'User not found'
//     })
//   }

//   // compara se a senha do login é a mesma do banco de dados
//   if (!await bcryptjs.compare(password, user.password))
//     return res.status(400).send({
//       error: 'Invalid password'
//     })

//   return res.send({
//     user
//   })
// })

module.exports = app => app.use('/auth', router)