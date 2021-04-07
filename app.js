
// third party libs
const express = require('express')
const app = express()

// node libs
const fs = require('fs')
const PORT = 8000


app.set('view engine', 'pug')
app.use('/static', express.static('public'))
app.use(express.urlencoded({ extended: false }))

//http://localhost:8000
app.get('/', (req, res) => {
    res.render('home')

})

app.post('/add', (req, res) => {
   const formData = req.body

   if (formData.todo.trim() == '') {
       res.render('home', { error: true })
   } else {
       fs.readFile('.data/todos.json', (err, data))
   } 
})

app.listen(PORT, (err) => {
    if (err) throw err

    console.log(`This app is running on port ${ PORT }`)
})
