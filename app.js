const fs = require('fs');

const readString = fs.createReadStream('./docs/blog.txt')

readString.on('data', (buffer)=>{
    console.log(buffer);
})