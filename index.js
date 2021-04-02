const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World test1')
})

app.listen(port, () => {
  console.log(`test1 -> http://localhost:${port}`)
})
