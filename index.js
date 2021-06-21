const express = require('express')
const cheerio = require('cheerio');

const app = express()
const port = 3000


app.get('/', (req, res) => {
  const cheerio = require('cheerio');
  const datahtml = cheerio.load('<h2 class="title">Hello world Dev cat</h2>');

  datahtml('h2.title').text('Hello there!');
  datahtml('h2').addClass('welcome');

  //datahtml.html();


  res.send('Hello World test1')

})

app.listen(port, () => {
  console.log(`test1 -> http://localhost:${port}`)
})
