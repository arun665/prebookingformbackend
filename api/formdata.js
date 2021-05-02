var express=require("express");
var router=express.Router();
var formData = require('../database/data.js');
const bodyParser = require("body-parser");

const jwt=require("jsonwebtoken");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));


router.get("/",function(req,res){
    res.send("running api success");
})


router.post("/add_data",function(req,res){
    
    var name=req.body.name;
    var email=req.body.email;
    var number=req.body.number;
    var company=req.body.company;
    var address=req.body.address;
var quantity=req.body.quantity;

if(name == '' || email=='' || number == '' || company == '' || address=='' || quantity==''){
    console.log("please fill all the details")
    res.send("please fill all the details")
}
else{
    
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
    from: '"Pre-booking form  👻" <arunsharmamoh@gmail.com>', // sender address
    to: 'arunsharmamoh@gmail.com', // list of receivers
    subject: 'Pre-bookign form filled', // Subject line
    text: 'Hello world 🐴', // plaintext body
    html: "<div> <h1><b>Hello amit bhatti </h1> ,<br> <h3>pre-booking form is filled by someone </h3> <h3> below are the details </h3>🐴</b> <br> <h4> name:"+ name +" </h4> <h4> email:"+ email +" </h4>  <br> <h4> number:"+ number +" </h4><br> <h4> Company :"+ company +" </h4> <h4> Shipping-Address:"+ address +" </h4>  <h4> quantity:"+ quantity +" </h4> </div>   " // html body
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
    from:'arunsharmamoh@gmail.com', // sender address
    to: email, // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world 🐴', // plaintext body
    html: '<b> Welcome to SCRATCHNEST </b>' // html body
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











    console.log(name);
    var newdata=new formData({

        Name:name,
        Email:email,
Number:number,
Company:company,
Quantity:quantity,
Address:address
    });

    newdata.save()
    .then(doc=>{
        res.status(201).json({
            message:"Booking Successfull",
            results:doc
        });
    })
    .catch(err=>{
        res.json(err);
    });
}

});



router.get("/getdata",function(req,res){

    var data=formData.find();

    data.exec()
    .then(doc=>{
        res.status(201).json({
            message:"User Registered Successfully",
            results:doc
        });
    })
    .catch(err=>{
        res.json(err);
    })

})

module.exports=router;