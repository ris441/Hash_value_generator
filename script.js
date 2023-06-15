 
    const crypto = require("crypto");
    const fs = require("fs");
    const filebuffer = fs.readFileSync("./download.jpg");

    const hash = crypto.createHash("sha256");
   const finalHex = hash.update(filebuffer).digest('hex');

   console.log(finalHex);

 