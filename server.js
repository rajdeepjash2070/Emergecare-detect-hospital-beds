
const express=require("express");
const mongoose= require("mongoose");
const app=express();
const cors = require("cors");
const router=require("./routes/hospital-routes");
app.use(express.json());
app.use(cors());
app.use("/hospitals", router);
// const User=require("./models/user");
// const router2=require("./routes/user-routes");
// app.use("/users", router2);

const useroute=require('./routes/user-routes');
app.use("/users",useroute);

const DB="mongodb+srv://rajdeepjash2070:zt4T3ZiieUM3FLCx@cluster0.nwezf.mongodb.net/mernstack1?retryWrites=true&w=majority";
//mongodb+srv://rajdeepjash2070:<password>@cluster0.nwezf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(DB,{
    useNewUrlParser:true,
    
    useUnifiedTopology:true,
   
}).then(()=>{
    console.log('connection successful to database');
}).catch(error=>{
 console.log('Error:',error.message);
})


const PORT=process.env.PORT || 8000;


app.get('/',(req,res)=>{
    res.send(`Hello this my home page`);
})
if(process.env.NODE_ENV=="production"){
    app.use(express.static("frontend/my-app/build"));
    const path=require("path");
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'frontend','my-app','build','index.html'));
    })
}
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})