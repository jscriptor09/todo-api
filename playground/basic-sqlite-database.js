/**
 * Created by Mark on 3/26/2016.
 */
var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, {
    'dialect': 'sqlite',
    'storage': __dirname + '/basic-sqlite-databse.sqlite'
});


var Todo = sequelize.define('todo', {
    description: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1,250]
        }
    },
    completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});
//Sequelize does all the hard work of converting js object to sql calls to DB
//works with mysql, postgres, MSSQL
//sequelize.sync({force:true}).then(function() {              if you want to drp all tables and recreate
sequelize.sync().then(function() {
    console.log('every thing is synced');


    Todo.findById(1).then(function (todo) {
        if (todo) {
            console.log(todo.toJSON());
        } else {
            console.log('Item was not found');
        }
    });

    // Todo.create({
    //     description: 'Walking my dog',
    //     completed: false
    // }).then(function(todo) {
    //     return Todo.create({
    //         description: 'clean Office'
    //     });
    // }).then(function(){
    //     //return Todo.findById(1)
    //     return Todo.findAll({
    //         where:{
    //             description: {
    //                 $like: '%office%'
    //             }
    //         }
    //     })
    // }).then(function(todos){
    //     if(todos) {
    //         todos.forEach(function(todo){
    //             console.log(todo.toJSON());
    //         })
    //
    //     }else{
    //         console.log('no todo found!');
    //     }
    // }).catch(function(e) {
    //     console.log(e);
    // })
    });

