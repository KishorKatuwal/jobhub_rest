const express = require('express')
const app = express()
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//importing routers
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const jobRouter = require('./routes/job');
const bookRouter = require('./routes/bookmark');



dotenv.config();
//process.env.VARIABLE

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("Database Connected Successfully"))
.catch((err)=> {console.log(err)});

app.use(express.json());
app.use("/api/",authRouter);
app.use("/api/users",userRouter);
app.use("/api/jobs",jobRouter);
app.use("/api/bookmarks",bookRouter);




app.listen(process.env.PORT || 5001, () => 
console.log(`Connection Established at Port = ${process.env.PORT}!`))