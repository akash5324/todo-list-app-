var express= require('express');//setup the express package
var todocontroller=require('./controllers/todocontroller');
var app=express();//setup the express function or methods
app.set('port', (process.env.PORT || 8080));
app.set('view engine','ejs');//setup the ejs or template engine
app.use(express.static('./public'));//setup the middleware for static files like css or images
todocontroller(app);//fire todocontroller
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
                                          //app.listen(3000);//listening to port number
console.log('hey akash I am port number 3000');//chechking port number working?
