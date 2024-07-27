const apiUrl = "https://api.publicapis.org/entries";
//fetch data from public api and log the response data
fetch(apiUrl) //fetch returns a promise
    .then(response => {
        if(!response.ok){
            throw new Error ("Network response was not okay " + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log("Response Data: ", data);
    })
    .catch(error =>{
        console.error("There is something wrong: ",error);
    });