const {mongoose}=require('mongoose');

<<<<<<< HEAD
const dbURL= `mongodb+srv://hohuyen712002:1234567890@huyn.x1hf2z0.mongodb.net/`
=======
const dbURL= `mongodb+srv://hohuyen712002:1234567890@huyn.x1hf2z0.mongodb.net/?retryWrites=true&w=majority&appName=huyn`
>>>>>>> 366051d6b85ce724dfa4ee9abc85459cb26851a2

const connectDB = async () => {
    try {
     const connection = await mongoose.connect(dbURL,{dbName:'data'});
     console.log('Connect MongoDb successfully');
    } catch (error) {
     console.log(error);
     process.exit(1);
    };
};




module.exports = connectDB