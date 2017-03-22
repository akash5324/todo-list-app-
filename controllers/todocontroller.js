var bodyParser=require('body-parser');
var mongoose=require('mongoose');

//connect to a mongodb
mongoose.connect('mongodb://akash:akash@ds137149.mlab.com:37149/todo');

//var data= [{item:'hyee akash'},{item:'hyee aditya'},{item: 'hyee abhishek'}];
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var todoSchema= new mongoose.Schema({
  item: String
});
var Todo=mongoose.model('todo',todoSchema);



module.exports= function(app)
{

  app.get('/todo',function(req,res)
{
  Todo.find({},function(err,data){

    if(err) throw err;
  res.render('todo',{todos:data});

  });


});

app.post('/todo', urlencodedParser,function(req,res)
{
  var newTodo = Todo(req.body).save(function(err, data){
     if (err) throw err;
  res.json(data);
});
});
app.delete('/todo/:item',function(req,res)

{
  Todo.find({item: req.params.item.replace(/\-/g, ' ')}).remove(function(err, data){
       if (err) throw err;
res.json(data);

});
});

}
