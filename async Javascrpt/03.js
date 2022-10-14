
let request = new XMLHttpRequest();

request.open("GET", "todos.json");

request.addEventListener('readystatechange',
    () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.responseText);
        }
        else if(request.status !== 200) {
            console.log("An error occurred");
        }
        
    })
request.send() 