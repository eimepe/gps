/*eslint no-console:0 */
'use strict';
require('core-js/fn/object/assign');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');
var bodyParser = require('body-parser');



//Server
const express = require('express');
const http = require('http');
const engine = require('socket.io');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var autorizado = require('./src/middleware/auth');

const  port = 3000;
const app = express();

var sessionMiddleware = session({
  store: new RedisStore({}),
  secret: "123avantecn123"
})

app.use(session({
  secret: "eidermmejia"
}));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post("/register", function(req, res){

var register = auth.emailSignup(req)
 res.status(200).jsonp(register);

 });

 app.post("/login", function(req, res){

 var login = auth.emailLogin(req)
  res.status(200).jsonp(login);

  });


  app.get("/servicio/:id", function(req, res){



   });



   app.get("/servicios", function(req, res){



    });


app.get("/editar/:token", autorizado.isAuth, function(req, res){

console.log(req.params.token);
//console.log(req.session.userids);
res.send(req.params.token);
  /*Service.findById("58b4caa3383df14bf61319ad", function(err, user){
  user.imagen = "https://cdn.pixabay.com/photo/2016/05/27/08/53/castle-1419280_960_720.jpg";
  user.save(function(err){
    if(err){
      console.log("guardado");
    }
  });
});*/
})

app.get("/insertar", function(req, res){
var service = new Service({nombre: "AUTOMATIZACION", text: "Sistema control de acceso para automatizacion de edificios, conjuntos y empresas ", categoria: 1, estado: 1, imagen: "https://cdn.pixabay.com/photo/2017/02/19/23/10/finger-2081169_960_720.jpg"});
service.save();
})

let data = [
  {id: 1, author: "Cosa Uno", text: "Comentario"},
  {id: 2, author: "Cosa Dos", text: "Otro Comentario"}
];

let server = http.createServer(app).listen(port, ()=>{
  console.log("Server in port 3000");
});



const io = engine.listen(server);

io.use(function(socket, next){
sessionMiddleware(socket.request, socket.request.res, next);
});

io.on('connection', (socket) => {



  socket.on('read', () => {

    //console.log();socket.request.session.userid







  })


  socket.on('login', () => {



  })



});

/// endserver
/**
 * Flag indicating whether webpack compiled for the first time.
 * @type {boolean}
 */
let isInitialCompilation = true;

const compiler = webpack(config);

new WebpackDevServer(compiler, config.devServer)
.listen(config.port, '181.57.227.50', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:' + config.port);
});

compiler.plugin('done', () => {
  if (isInitialCompilation) {
    // Ensures that we log after webpack printed its stats (is there a better way?)
    setTimeout(() => {
      console.log('\n✓ The bundle is now ready for serving!\n');
      console.log('  Open in iframe mode:\t\x1b[33m%s\x1b[0m',  'http://localhost:' + config.port + '/webpack-dev-server/');
      console.log('  Open in inline mode:\t\x1b[33m%s\x1b[0m', 'http://localhost:' + config.port + '/\n');
      console.log('  \x1b[33mHMR is active\x1b[0m. The bundle will automatically rebuild and live-update on changes.')
    }, 350);
  }
  isInitialCompilation = false;
});
