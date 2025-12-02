// load express
const express = require('express');
// load handlebars
const exphbs = require('express-handlebars');

// instantiate express
const app = express();

// configure express to use handlebars as templating engine
app.engine(
  'hbs',
  exphbs.engine({
    extname: '.hbs',
    // use this layout by default - if you have different layout
    // for say home page - you can toggle this in your code
    defaultLayout: 'default',
    // set location of layouts
    layoutsDir: 'views/layouts',
    // set location of partials - header, footer, etc
    partialsDir: 'views/partials',
  })
);
// set the view engine to handlesbards
app.set('view engine', 'hbs');
// where to find all of the view
app.set('views',  'views');
// where to find static files - css, images, js
app.use(express.static('public'));

// home page or home route
app.get('/', (req, res) => {

  // set active or not for navigation (Index)
  state = { index: true }
  // set specifics for <head>
  head={'title': "index - Week 1"}
  res.render('index', {state:state, head:head});
  // send this to terminal where node app is running
  console.log('index')

});

// shop page
app.get('/shop', (req, res) => {
    state={'shop' : false, shop : true}
    head={'title': "shop - Week 1"}
    res.render('shop', { state:state, head:head});
    console.log('shop')
  });

  // contact page
app.get('/contact', (req, res) => {
  state={'contact' : false, contact : true}
  head={'title': "contact - Week 1"}
  res.render('contact', { state:state, head:head});
  console.log('contact')
});

// about page
app.get('/about', (req, res) => {
  state={'about' : false, about : true}
  head={'title': "about - Week 1"}
  res.render('about', { state:state, head:head});
  console.log('about')
});

// login page
app.get('/login', (req, res) => {
  state={'login' : false, login : true}
  head={'title': "login - Week 1"}
  res.render('login', { state:state, head:head});
  console.log('login')
});

// checkout
app.get('/checkout', (req, res) => {
  state={'checkout' : false, checkout : true}
  head={'title': "checkout - Week 1"}
  res.render('checkout', { state:state, head:head});
  console.log('checkout')
});

// userdetails page
app.get('/userdetails', (req, res) => {
  state={'userdetails' : false, userdetails : true}
  head={'title': "userdetails - Week 1"}
  res.render('userdetails', { state:state, head:head});
  console.log('userdetails')
});

// products page
app.get('/products', (req, res) => {
  state={'userdetails' : false, products : true}
  head={'title': "products - Week 1"}
  res.render('products', { state:state, head:head});
  console.log('products')
});

// submission route for get 
app.get('/submission' ,(req, res) => {

  formDetails={userEmail:req.query.userEmail, userComment:req.query.userComment, userName:req.query.userName} 
  res.render('submission',{formDetails});

})

// submmiosion route for post
app.post('/submission' , (req, res) => {

  formDetails={userEmail:req.body.userEmail, userComment:req.query.userComment, userName:req.query.userName} 
  res.render ('submission',{state,formDetails});
  
})

// app.js 
// some basic functionality for login, checkout, userdetails
// amend and supplement in your project as you see fit

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

