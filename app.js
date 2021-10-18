const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000


const loginRouter = require('./src/routes/login.router')
const usersRouter = require('./src/routes/users.router')
const cookieParser = require('cookie-parser')
const homeRouter = require('./src/routes/home.router')
const adminRouter = require('./src/routes/admin.router')
const session = require('express-session')
const aboutRouter = require('./src/routes/about.router')
const contatoRouter = require('./src/routes/contato.router')
const forgotPasswordRouter = require('./src/routes/forgot-password.router')
const changePasswordRouter = require('./src/routes/change-password.router')
const methodOverride = require('method-override')

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(session({
    secret: "melhorSiteGeek",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 24
  
    }
}))

app.use(express.urlencoded({ extended: false }))
app.use(express.json());




// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

// connection db
const models = require('./src/database/models');
const { render } = require('ejs')
const connect = async () => {
  try {
    await models.sequelize.authenticate();
    console.log('Parabéns padawan conexão bem sucedida.');
  } catch (error) {
    console.error('Não foi possível conecta ao banco de dados Padawan:', error);
  }
}
connect();

app.get('/', homeRouter)
app.get('/product/:id', homeRouter)
app.get('/products/:field/:value', homeRouter)

app.use('/login', loginRouter)
//app.use(singUpRouter)
app.use('/forgot-password', forgotPasswordRouter)

// Post route to handle form submission logic and 
app.use('/change-password', changePasswordRouter)

app.use('/admin', function(req, res, next) {
    console.log('Request URL:', req.url);
    next();
  }, adminRouter)
app.use('/quem-somos',aboutRouter)
app.use('/contato', contatoRouter)
app.use('/cadastro', usersRouter)

/*test
app.get('/template-forgot-password', function(req, res){
  const user = {
    user_name: 'William Xavier',
    password: 'Senha Teste'
  }
  res.render('template-forgot-password',{ user })
})*/

app.use((req, res, next) => {
    res.status(404).render('404')
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})