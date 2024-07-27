//let myPromise = new Promise(function(myResolve, myReject){
  //  setTimeout(function(){
    //    myResolve("Resolved");
    //},2000);
    

//})

//myPromise.then(function(value){
  //  console.log(value);
//}) 
let myPromise = new Promise(function(myResolve, myReject){
    setTimeout(function(){
        myReject("Something went wrong");
    },2000)
});

//Handling the error
myPromise.catch(error => {
    console.error("Promise rejected");
});
