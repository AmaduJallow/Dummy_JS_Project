
let getData = (resource) => {
    return  fetch(`${resource}`);
};
getData("todos.json").then((json) =>{
   return json.json();
}).then((data) => {
    console.log(data);
})
    .catch((err) => {
    console.log(err);
});