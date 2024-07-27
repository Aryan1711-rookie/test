//Promises
const fs = require('fs');
function tiwariReadFile(){
    return new Promise(function(resolve){
      fs.readFile("sample.txt","utf-8",function(err,data){
        resolve(data);
     }) ;       
})
}
function onDone(data){
    console.log(data);
}
tiwariReadFile().then(onDone)
