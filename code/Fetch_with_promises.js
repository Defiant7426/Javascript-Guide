// Fetch API with promises

// Fetch API: The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.

// Promises: Promises are a way to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.

// The Fetch API uses Promises to handle requests. The Fetch API is a modern replacement for XMLHttpRequest. It is more powerful and flexible than XMLHttpRequest, and it is simpler to use.

const url = 'https://jsonplaceholder.typicode.com/comments';

fetch(url)
    .then(response => { // The response object contains the response from the server
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // The json() method returns a promise that resolves with the result of parsing the body text as JSON
    })  // The json() method returns a promise that resolves with the result of parsing the body text as JSON
    .then(data => { 
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });