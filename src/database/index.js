const mongoose = require('mongoose')

// mongoose.connect('mongodb+srv://admin:121019@cluster0-yalob.mongodb.net/structure?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })

mongoose.connect('mongodb+srv://admin:121019@cluster0-yalob.mongodb.net/mestrando?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.Promise = global.Promise

module.exports = mongoose