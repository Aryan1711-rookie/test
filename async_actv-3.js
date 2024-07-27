//function to stimulate a promise that resolves after a delay
const stimulatePromise = (message, delay)=>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(message);
        },delay);
    });
};

//Async functions that waits for the promise to resolve and logs the resolved value
const logResolvedValue = async()=>{
    try{
        const message = await stimulatePromise("Promise resolved successfully", 2000);
        console.log(message);
    }
    catch(error){
        console.error("An error occured ", error.message);
    }
};
// call the async function
logResolvedValue();