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
        to: email,
        subject: 'Test mail',
        text: 'Node.js testing mail for GeeksforGeeks'
    };
      
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log('Error Occurs');
        } else {
            console.log('Email sent successfully');
            res.send("both mail send");
        }
    
    });

    
    
mailDetails = {
    from: '<arunsharmamoh@gmail.com>',
    to: 'arun0318.cse19@chitkara.edu.in',
    subject: 'Pre-Booking Form filled',
    html: '<h1> hi amit bhatti </h1> <h3>Some one filled the form , here are the details of him</h3> <br> name:'+name+'<br> email:'+email+'<br> address:'+address+'<br> Phone:'+number+'<br> Company:'+company+'<br>'
};
  
mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully');
        res.send("both mail send");

}



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