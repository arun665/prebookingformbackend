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
            user: 'sctratchnestqueries@gmail.com',
            pass: 'P@ssword@**@!'
        }
    });
      
    let mailDetails = {
        from: '<sctratchnestqueries@gmail.com>',
        to: email,
        subject: 'Thanks for choosing Scratchnest!!!',
        html: '<div> <h1> Hi '+ name + ' 💯🤝✋ ,</h1> <br> <h3> Thank you very much for choosing ScratchNest!. We are delighted to have you on board!</h3> <br> <h3> We are sure you want to start using our product as soon as possible , someone from our team will contact you within 24 working hours. </h3> <br> <h3> product Link--> https://scratchnest-ff76c.web.app/  </h3> </div>'
    };
      
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log('Error Occurs');
        } else {
            console.log('Email sent successfully');
        
        }
    
    });

    
    
mailDetails = {
    from: '<sctratchnestqueries@gmail.com>',
    to: 'sales@scratchnest.com , arun0318.cse19@chitkara.edu.in',
    subject: 'Pre-Booking Form filled',
    html: '<div ><h1> Hi Team 💯✋🐣 </h1> <h3>Some one filled the form , here are the details of him</h3> <br> name=>'+name+'<br> email=>'+email+'<br> address=>'+address+'<br> Phone=>'+number+'<br> Company=>'+company+'<br>quantity=>'+quantity+'<br></div>'
};
  
mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully');


}
});



var userDetails=new formData({
            
    name:name,
    email:email,
    number:number,
    company:company,
    quantity:quantity,
    address:address


});



userDetails.save()
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