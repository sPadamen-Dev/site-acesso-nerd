const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', './src/views')


// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));


app.get('/', (req,res)=>{
    res.render('home')
})

app.get('/login', (req,res)=>{
    res.render('login')
})

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
})