const express = require('express')

const app = express()

app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  const items = [
    {
      title: 'D',
      menssage: 'Desenvolver aplicações/serviçoes de forma facil'
    },
    {
      title: 'M',
      message: 'Mais Logica para seu html com o EJS'
    },
    {
      title: 'A',
      message: 'A forma dinamica de ultilizar EJS para projetos grandes'
    },
    {
      title: 'I',
      message: 'Intregrando com o servidor de forma facil'
    }
  ]

  res.render('pages/index', {
    qualiys: items,
  })
})

app.get('/about', (req, res) => {
  res.render('pages/about.ejs')
})

app.listen(8080, () => {
  console.log('Rodando em http://localhost:8080')
})
