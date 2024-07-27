//async javascript inbuilt functions
// setTimeOut, fs
//reading txt file.
const fs = require("fs");
fs.readFile("sample.txt","utf-8",function(err,data){
    console.log(data);
})

console.log("Hey there, it's an async call");