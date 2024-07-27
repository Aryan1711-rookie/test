//let myPromise = new Promise(function(myResolve, myReject){
  //  myResolve();
   // myReject();
//});

//consuming code
//myPromise.then(
  //  function(value){/*Code if successfull  */},
    //function(error){/*Code if unsuccessfull */}
//)

//examples
setTimeout(function(){
    myFunction("Helllloooooooooooooooooooooo");
},3000);
function myFunction(value){
    console.log(value)
}

// example using Promise
let myPromise = new Promise(function(myResolve, myReject){
    setTimeout(function(){
        myResolve("Helllllllllllooooooooooooooo");
    },3000);
});
myPromise.then(function(value){
    console.log(value);
});