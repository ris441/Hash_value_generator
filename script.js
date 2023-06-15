 
    const crypto = require("crypto");
    let ejs = require('ejs');
    const fs = require("fs");
    const filebuffer = fs.readFileSync("./download.jpg");
    const express = require('express');

    const hash = crypto.createHash("sha256");
   const finalHex = hash.update(filebuffer).digest('hex');
 ejs.render('./index.ejs', {finalHex: finalHex})
   console.log(finalHex);
   var app = express();
   app.use(express.static(__dirname + '/public'));
   const PORT = 3000;
    app.get('/', (req, res) => {
    res.render('index.ejs', {finalHex: finalHex});
    });
   
   app.listen(PORT, (error) =>{
   if(!error){
    
   console.log("Server is Successfully Running,and App is listening on port "+ PORT)
   }
   else console.log("Error occurred, server can't start", error);
});