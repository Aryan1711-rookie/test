//function to stimulate fetching data from a server with a delay
const fetchData = (message,delay) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(message);
        },delay);
    });
};

//chain the promises to log messages in a specific order
fetchData("Fetching user data...",1000)
 .then((message) =>{
    console.log(message);
    return fetchData("Fetching orders data", 2000);
 })
 .then((message) => {
    console.log(message);
    return fetchData("Fetching products data", 1500);
 })
 .then((message) => {
    console.log(message);
    return fetchData("All data Fetched", 1000);
 })
 .then((message) =>{
    console.log(message);
 })
 .catch((error) =>{
    console.error("Something went wrong.");
 });