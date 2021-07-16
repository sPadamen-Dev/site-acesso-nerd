const express = require('express')
const app = express()
const port = 3000

const loginRouter = require('./src/routes/login.router')
const singUpRouter = require('./src/routes/register.router')
const productsRouter = require('./src/routes/products.router')

app.set('view engine', 'ejs')
app.set('views', './src/views')
app.use(express.json());

// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

app.get('/', productsRouter)
app.use('/login', loginRouter)
app.use(singUpRouter)
app.use('/products', productsRouter)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})