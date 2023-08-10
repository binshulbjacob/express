var express= require('express');
var path=require('path');
var app=express();
var bodyParser=require('body-parser');


app.use(bodyParser());
app.get('/',function(req,res){
   res.sendFile('registration.html',{ root:path.join(__dirname,'./htmlpage')});
   app.post('/users',function(req,res){
      res.end('name:'+req.body.name +'\naddress:'+req.body.address +'\ngender:'+req.body.gender +'\ndate:'+req.body.date +'\ncontact:'+req.body.contact +'\nemail:'+req.body.email  +'\npassword:'+req.body.password ); 

     

   });
});
app.listen(4000);