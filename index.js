var express= require('express');
var path=require('path');
var app=express();
var bodyParser=require('body-parser');


app.use(bodyParser());
app.get('/',function(req,res){
   res.sendFile('profile.html',{ root:path.join(__dirname,'./htmlpage')});
   app.post('/',function(req,res){
      res.end(JSON.stringify(req.body));

   });
});
app.listen(3000);


// FULLNAME ADDRESS GENDER DATEOFBIRTH CONTACTNO EMAIL PASSWORD SUBMIT