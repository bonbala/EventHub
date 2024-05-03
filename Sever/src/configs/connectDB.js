const {mongoose}=require('mongoose');

const dbURL= `mongodb+srv://hohuyen712002:1234567890@huyn.x1hf2z0.mongodb.net/`

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