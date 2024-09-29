const express = require("express")

const app = express();

app.use("/hello",(req,res)=>{
    res.send("Yahaloo ");
})

app.use("/test", (req,res)=>{
    res.send("Test");
})


app.listen(3000, ()=>{
    console.log("server is running");
    
});

