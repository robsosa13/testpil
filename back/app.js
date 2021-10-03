var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT ||  4201;
var app = express();
//ROUTES 
var product_routes = require('./routes/product');
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use((req,res,next)=>{
    res.header('Content-Type: application/json');
    res.header('Access-Control-Allow-Origin','*'); 
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
    next();
});
//Conection db MONGO 

mongoose.connect('mongodb://localhost:27017/testpil',{useUnifiedTopology: true, useNewUrlParser: true},(err,res)=>{
    if(err){
        throw err;
    }
    else{
        console.log("Corriendo servidor");
        app.listen(port, function(){
            console.log("Servidor corriendo en el puerto " + port);           
        });
    }
}); 




//**Rutas API  */
app.use('/api',product_routes); 
module.exports = app;