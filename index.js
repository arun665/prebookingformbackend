var express=require("express");
var formDataApi=require("./api/formdata.js");

const app = express();
const path = require('path');



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization"
  );
  res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
  next();
});


  

 app.use("/api",formDataApi);



 
 const bodyParser = require("body-parser")
 app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req, res) {

  const nodemailer = require('nodemailer');
  
  
let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'arunsharmamoh@gmail.com',
        pass: 'Arun5207@'
    }
});
  
let mailDetails = {
    from: '<arunsharmamoh@gmail.com>',
    to: 'arun0318.cse19@chitkara.edu.in',
    subject: 'Test mail',
    text: 'this mail is by arun '
};
  
mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully');
   
      }
});
})




 

app.listen(process.env.PORT||5000,function(res){
    console.log("server running on 5000");
});