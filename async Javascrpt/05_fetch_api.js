
let getData = (resource) => {
    return  fetch(`${resource}`);
};
// getData("todos.json").then((json) =>{
//    return json.json();
// }).then((data) => {
//     console.log(data);
// })
//     .catch((err) => {
//     console.log(err);
// });

//! Asyncs and Await

 getData = async (resource) => {
     const response = await fetch(`${resource}`);
    let data = await response.json();
     return data;
}
getData("todos.json").then((data) => {
    console.log(data);
}).catch((err) => { 
    console.error(err);
})
 


