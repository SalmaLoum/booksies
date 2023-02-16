const mongoose = require('mongoose')

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
)

module.exports = mongoose.connection

// mongodb+srv://salmaloum:QGJ7yHiHz4WCTkyo@cluster0.ciahnpq.mongodb.net/googlebooks?retryWrites=true&w=majority
