console.log("backend")
const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    res.send('Hello Twitter!')
  })
  app.get('/login', (req, res) => {
    res.send('<h1>Login at backend code</h1>')
  })
  app.get('/youtube', (req, res) => {
    res.send('<h2><a href="https://www.youtube.com/">Youtube</a></h2>')
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})