const express = require('express')
const app = express()
const port = 3000

const loginRouter = require('./src/routes/login.router')
const singUpRouter = require('./src/routes/register.router')
const cookieParser = require('cookie-parser')
const productsRouter = require('./src/routes/products.router')
const adminRouter = require('./src/routes/admin.router')
const session = require('express-session')

app.set('view engine', 'ejs')
app.set('views', './src/views')
app.use(session({
    secret: "melhorSiteGeek",
    resave: true,
    saveUninitialized: true
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));


app.get('/', productsRouter)
app.use('/login', loginRouter)
app.use(singUpRouter)
app.use('/products', productsRouter)
app.use('/admin', adminRouter)


app.use((req, res, next) => {
    res.status(404).render('404')
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})