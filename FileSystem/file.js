// const fs = require("fs");

//sync
 //fs.writeFileSync("./test.txt","hlo world");

//Async
//fs.writeFile("./test.txt","hii",(err)=>{})
// const result =    fs.readFileSync("./contac.txt","utf-8");
// console.log(result)


//  fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString())
// fs.appendFileSync("./test.txt",`${Date.now()}  hey there \n`)
// // fs.cpSync("./test.txt","./copy.txt")
// fs.unlinkSync("./copy.txt")

// console.log("1")
// const fs = require("fs")
// //blocking
// const result = fs.readFileSync("./contac.txt","utf-8")
// console.log(result)
// console.log("1")


// console.log("1")
// const fs = require("fs")
// //non blocking
// fs.readFile("./contac.txt","utf-8",(err,result) => {
// console.log(result)
// })

// console.log("2")
// console.log("2")
// console.log("2")

// const fs = require("fs")
// fs.writeFile("./index.txt","welcome to file system",(err,result)=>{
//     console.log(result)
// })






// const fs = require("fs");

// fs.writeFile("./work.txt", "welcome to file system", (err) => {             //write file
//     if (err) {
//         console.error("Error writing file:", err);
//     } else {
//         console.log("File written successfully!");
//     }
// });



// const fs = require("fs");

// fs.readFile("./work.txt","utf-8",(error,result)=>{                       // read file 
//     console.log(result)
// })


// const fs =require("fs");

// fs.appendFile("./work.txt","hello neha\n",  (err)=> {             // append in file
//     if(err){
//         console.log("error",err)
//     }else{
//         console.log("sucessfully append")
//     }

// })

// const fs = require("fs")

// fs.unlink("./work.txt",(err)=>{
//     if(err){                                                         // delete files
//         console.log("error in file",err)
//     }else{
//         console.log("filedelete sucessfully")
//     }
// })


