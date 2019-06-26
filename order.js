var express=require('express');
var app=express();

var controller=function(req,resp){
    console.log("Calling REST API");

    var order=[
{CustomerName:'Heerendra mahore',orderDate:'20-07-1994',age:25,address:'Bhopal'},
{CustomerName:'Gaurav raut',orderDate:'22-09-1994',age:25,address:'Pune'},
{CustomerName:'Bhagyesh mawale',orderDate:'15-04-1994',age:25,address:'Akurdi'},
{CustomerName:'Payal Yadav',orderDate:'15-10-1994',age:25,address:'Bhopal'},
{CustomerName:'Aditya Suryawanshi',orderDate:'21-11-1994',age:25,address:'Amarawati'},
{CustomerName:'Jinkal Bhimani',orderDate:'15-11-1997',age:25,address:'Nagpur'}
    ];
    resp.send(order);
};

app.get('/order',controller);
var server=app.listen(9898,function(){
    var.host=server.address().address
    var.port=server.address().port

console.log("App is listening on http://localhost:9898/order",host,port)
})