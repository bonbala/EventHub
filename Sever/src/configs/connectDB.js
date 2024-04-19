const {mongoose}=require('mongoose');

const dbURL= `mongodb+srv://nhathieu1805:123465@cluster0.q1jhkvl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const connectDB = async () => {
    try {
     const connection = await mongoose.connect(dbURL);
     console.log(connection);
    } catch (error) {
     console.log(error);
     process.exit(1);
    };
};


module.exports = connectDB