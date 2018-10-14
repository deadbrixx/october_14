var mongoose = require('mongoose');
mongoose.connect('monogdb://localhost:27017/db_name' ,(err, connection) => {
    if(err){
        console.log('not connected'); 
    }else{
        console.log('Mongodb connected');    
    }
})
