var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
    id: 1,
    description: 'Meet mom for lunch',
    completed: false
},{
    id: 2,
    description: 'Go to Market',
    completed: false
},{
    id: 3,
    description: 'Go to School',
    completed: true
}];

//GET Request
app.get('/', function(req, res) {
  res.json("Todo API Root");
});

//GET /todos
app.get('/todos', function(req, res){


    res.json(todos);
});

//GET /todo/:id
app.get('/todos/:id', function(req, res){
    var todoId = parseInt(req.params.id);
    var matchedTodo = null;
    
    todos.forEach(function (todo) {
        if(todoId === todo.id) {
            matchedTodo = todo;
        }
    });
    if(!matchedTodo) {
        res.status(404).send({ error: "boo:(" });
    } else {
        res.json(matchedTodo);
    }
});

app.listen(PORT, function() {
    console.log('Express Listening on port ' + PORT + '!');
});