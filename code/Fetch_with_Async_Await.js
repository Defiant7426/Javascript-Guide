// Fetch with Async/Await

// The async function declaration defines an asynchronous function, which returns an AsyncFunction object. An asynchronous function is a function which operates asynchronously via the event loop, using an implicit Promise to return its result. But the syntax and structure of your code using async functions is much more like using standard synchronous functions.

// The await operator is used to wait for a Promise. It can only be used inside an async function. The keyword await makes JavaScript wait until the promise returns a result.

const url = 'https://jsonplaceholder.typicode.com/comments';

const fetchData = async () => { // The async function declaration defines an asynchronous function
    try {

        const start = performance.now();

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);

        const end = performance.now();

        console.log(`Time taken: ${end - start}ms`);
        
    } catch (error) {
        console.log(error);
    }
}

fetchData();