const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://sayanmaitraj5:sayan123@cluster0.ti0y3a0.mongodb.net/?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log(`MOngoDb Connected : ${conn.connection.host}`);
  } catch (error) {
    console.log(`Exit pls  ${error.message}`);
    process.exit();
  }
};
connectDB();

const newSchema = new mongoose.Schema({
  email: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
});

const collection = mongoose.model("collection", newSchema);
module.exports = collection;
