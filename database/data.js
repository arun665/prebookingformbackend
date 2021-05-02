const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mongodb:Arun1117@cluster0.spwl1.mongodb.net/prebookingambitag?retryWrites=true&w=majority', {useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true });
var conn =mongoose.Collection;
var passSchema =new mongoose.Schema({
    Name: {type:String, 
        },
        Email: {type:String, 
        
           },
        Number:{type:String, 

           },
           Company:{type:String, 
     
           },
           Quantity:{type:String, 
     
           },
           Address:{type:String, 
     
           },
           
    date:{
        type: Date, 
        default: Date.now }
});

var formData = mongoose.model('formData', passSchema);


module.exports=formData;