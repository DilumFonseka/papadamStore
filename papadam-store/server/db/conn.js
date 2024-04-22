import mongoose from "mongoose";


const DB = "mongodb+srv://dilumfonseka1998:mUJ1VMr4kj5NoQym@cluster0.pgqewlk.mongodb.net/papadamapp?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log("Database Connected"))
  .catch((err) => {
    console.error(err);
  });
