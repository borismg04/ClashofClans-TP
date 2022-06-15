const PORT = 8080
const express = require('express')
const cors = require('cors')
const axios = require('axios')
const dotenv = require('dotenv')

require('dotenv').config()

const app = express();

app.listen (PORT, () => {
  console.log(`🚀🚀 Server is running on port ${PORT} 🚀🚀`)
})


