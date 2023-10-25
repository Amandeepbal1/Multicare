const mongoose = require('mongoose');

const db = process.env.DATABASE;

mongoose.connect(db,{
    maxPoolSize: 50,
    wtimeoutMS: 2500,
    useNewUrlParser: true
}).then(()=>{
    console.log("connection Successfull");
}).catch((e)=>{
    console.log(e);
});
