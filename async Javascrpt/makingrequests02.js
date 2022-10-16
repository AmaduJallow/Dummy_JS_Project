// console.log("Hello, world!", 1);
// console.log("Hello, world!", 2);
// let response;
// getTodos = (callback) => {
//     let request = new XMLHttpRequest();

//     request.open("GET",
//         "https://jsonplaceholder.typicode.com/todos/");
//     request.addEventListener("readystatechange",
    
//             () => {
//         // console.log(request.readyState, request)
//             if (request.readyState === 4 && request.status === 200) {
//                 response = JSON.parse(request.responseText);
//                 callback(undefined, response);
//             }
//             else if (request.readyState === 4 && request.status !== 200) {
//                 callback("Couldn't connect to server", undefined);
//             }

        
//     }
// )
// request.send();

// }

// getTodos((err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     else { 
//         console.log(data);
//     }


// });

// console.log("Hello, world!", 3);
// console.log("Hello, world!", 4);
// console.log

// ! Using Promises here

console.log("Hello, world!", 1);
console.log("Hello, world!", 2);
let response;
getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();

        request.open("GET",`${resource}`);
        request.addEventListener("readystatechange", () => {
        
            // console.log(request.readyState, request)
            if (request.readyState === 4 && request.status === 200) {
                resolve(request.responseText)
                
            }
            else if (request.readyState === 4 && request.status !== 200) {
                reject("there is an error")
            }

        
        }
        );
        request.send();


    });
} 

getTodos("https://jsonplaceholder.typicode.com/todos/").then((data) => {
    console.log(data);

}).catch(reject => {
    console.log(reject);
    
});