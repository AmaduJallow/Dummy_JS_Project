// !Synchronous code
console.log("Hello world!");
console.log("Hello !");

// ! Asynchronous code || Callbacks functions

console.log("Hello world!",1);
console.log("Hello !",2);
// ! Callbacks functions to do asynchronous coding!
setTimeout(() => {
    console.log("Hello Asynchronous",3)
}, 1000 )
console.log("Hello world!",4);
console.log("Hello !",5);