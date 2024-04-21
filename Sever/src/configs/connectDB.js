const {mongoose}=require('mongoose');

const dbURL= `mongodb+srv://nhathieu1805:54pussq7xG7QatQI@cluster0.dmrfi6s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const connectDB = async () => {
    try {
     const connection = await mongoose.connect(dbURL,{dbName:'ChooseMe'});
     console.log('Connect MongoDb successfully');
    } catch (error) {
     console.log(error);
     process.exit(1);
    };
};


module.exports = connectDB