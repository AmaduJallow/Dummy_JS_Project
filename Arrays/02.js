const numbers = [1, 2, 3, 4, 5, 6, 7,7,7,7,9];

let value = numbers.indexOf(3);
console.log(value);  
value = numbers.lastIndexOf(7);
console.log(value);  
value = numbers.includes(6);
console.log(value);  

//  !Reference Type

let courses = [
    {
        id: 0,
        course_name: "Javascript"
    },
    {
        id: 1,
        course_name: "Java"
    }
    
]