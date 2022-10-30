let btn = document.getElementById("#jokebtn");

let joke = async () => {
    let response = await fetch("https://api.chucknorris.io/jokes/random");
   return await response.json();
}
    joke().then(data => {
        console.log("joke", data);
        document.getElementById("joker").innerHTML = data.value;
    }).catch(err => {
        console.log("error", err);
    })

btn.addEventListener("click", getData);
