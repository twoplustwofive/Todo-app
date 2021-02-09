var mongoose = require("mongoose");
// var data = [{item:"t1"},{item:"t2"},{item:"t3"},{item:"t4"}];
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({extended:false});

var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model("Todo",todoSchema);


module.exports = function(app){

    app.get("/todo",function(req,res){
        Todo.find({},function(err,data){
            if(err) throw err;
            res.render('todo',{data:data});           
        });
    }); 

    app.post("/todo",urlencodedParser,function(req,res){
        var newTodo = Todo(req.body).save(function(err,data){
            if(err) throw err;      
        });
        res.redirect("/todo");
    });

    app.get("/todo/delete/:id",function(req,res){
        // Todo.find({item:req.params.id.replace(/\-/g," ")}).deleteMany(function(err,data){
        //     if(err) throw err;
        //     res.JSON(data);
        // });

        Todo.findById(req.params.id).deleteMany(function(err,data){
            if(err) throw err;
            res.json(data,function(err,data){
                if(err) throw err;
            });
        });

        console.log(req.params.id+" "+"id");
        res.redirect("/todo");
    });



};