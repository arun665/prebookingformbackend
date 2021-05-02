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
  

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization"
  );
  res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
  next();
});

app.get("/",function(req,res){
  res.send("server started");
})
 app.use("/api",formDataApi);

 
 const bodyParser = require("body-parser")
 app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {
  res.send('Hello World')
})

 
app.get('/sendmail', function (req, res) {
    
    var nodemailer = require('nodemailer');
 
// create reusable transporter object using the default SMTP transport

 transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'arunsharmamoh@gmail.com',
        pass:'varunarun181'
    }
});
 
// setup e-mail data with unicode symbols
mailOptions = {
    from: '"Fred Foo 👥" <arunsharmamoh@gmail.com>', // sender address
    to: 'arunsharmamoh@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world 🐴', // plaintext body
    html: '<b>Hello world 🐴</b>' // html body
};
 
// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        res.send(error);
        console.log("error")
    }
    console.log('Message sent: ' + info.response);

});



var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'arunsharmamoh@gmail.com',
        pass:'varunarun181'
    }
});
 
// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"Fred Foo 👥" <arunsharmamoh@gmail.com>', // sender address
    to: 'arun0318.cse19@chitkara.edu.in', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world 🐴', // plaintext body
    html: '<b>Hello world 🐴</b>' // html body
};
 
// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        res.send(error);
        console.log("error")
    }
    console.log('Message sent: ' + info.response);

    res.send("both mail sended");
});








  })
 

app.listen(preocess.env.PORT||5000,function(res){
    console.log("server running on 5000");
});