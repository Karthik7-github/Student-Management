const mongoose = require('mongoose');

async function ConnectionDB() {
    try{
        mongoose.connect(process.env.MONGO_URL);

        console.log("Connected Successfully ✅");
    }catch(err){
        console.log("Connection Failure ❌ : ",err)
    }
}

module.exports = ConnectionDB;
