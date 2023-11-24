const fs = require('fs');

// fs.writeFile('./docs/blog1.txt', 'write text', (err) =>{ // write file
//     if (err)
//             console.log(err);
// })

// fs.appendFile('./docs/blog1.txt', '\nappend text', (err)=>{ // append file
//     if (err)
//         console.log(err);
//     else{
//         fs.readFile('./docs/blog1.txt',  (err , data) => { // read file
//             if (err)
//                 console.log(err);
//             else
//                 console.log(data.toString());
//         })
//     }
// })

// fs.mkdir('./assets', (err)=>{ // create directory
//     (err)
//         console.log(err);
//     console.log('folder created');
// })
// fs.rmdir('./assets' , (err)=>{ // remove directory
//     if(err)
//         console.log(err);
//     console.log('remove directory');
// })

// fs.unlink('./docs/blog1.txt', (err)=>{ // remove file
//     if(err)
//         console.log(err);
//     console.log('file removing');
// })