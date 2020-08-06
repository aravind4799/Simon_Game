const express = require("express");

const app = express();

app.use(express.static("public"));
let port = 3010

app.get("/",(req,res) => {
  res.sendFile(__dirname + "/index.html")
})

app.listen(process.env.PORT || port  , ()=>( console.log(`server up and at port:${port}`) ));