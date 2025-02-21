import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv" 
import mainRouter from './routes/indexRouting.js';
dotenv.config();

//variables that hold vvalues inside the .env file
const db_user = process.env.DB_USER;
const db_name = process.env.DB_NAME;
const port = process.env.PORT || 3000;
const db_pass = process.env.DB_PASS;

const app = express();
app.use(express.json());
app.use('/',mainRouter);


//copied codes
const dbUri = `mongodb+srv://${db_user}:${db_pass}@cluster0.xstok.mongodb.net/${db_name}`;
mongoose.set("strictQuery", false);
mongoose
  .connect(dbUri)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Node API is running on port http://localhost:${port}`);
     
    });
  })
  .catch((error) => {
    console.log(error);
  });



// app.get('/getresult',(req, res)=>{
//     res.send('This is my first project of node js')
// })

// app.post('/postrequest', (req, res) => {
//     res.send('Got a POST request')
//   })

// const PORT=5000;
// app.listen(PORT,()=>{
//     console.log(`This app is running on the port ${PORT}`);
    
// });