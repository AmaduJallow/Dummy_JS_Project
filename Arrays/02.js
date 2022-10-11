let numbers = [1, 2, 3, 4, 5, 6, 7,7,7,7,9];

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
function getCourse(course) {
    if (course.id == 1) {
        return true;
    }
    else {
        return false;
    }
}
value = courses.find(getCourse);
console.log(value);

// !Arrow functions in js

courses = () => {
    
    
}

//!spread function in ES6
const first = [1,2,3,4,5,6,7,8,9,10];
const second = [11,12,13,14,15,16,17,18,19];

const combine = [...first,...second];
console.log(combine);

// !Iterate through an Array
numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
numbers.forEach((number,index)=>{
    console.log("index: ",index,Math.pow(number, 1/2));
});
// !Splitting and joining an array
 const messages = "I am Phoenix and I Rise Above";
 let parts = messages.split(" ");
 let combined = parts.join("-");
 console.log("combined: " + combined)


// todo Sorting Arrays in Jscript

courses = [
    {
        id: 0,
        "name": "Node.js"
    },
    {
        id: 1,
        "name": "javaScript"
    },
    {
        id: 2,
        "name": "Laravel PHP"
    },
    {
        id : 3,
        "name": "Django"
    }

        ]

courses.sort(function(a, b) {
    let name1 = a.name.toLowerCase();
    let name2 = b.name.toLowerCase();
    if (name1 < name2) return -1;
    if (name2 > name1) return 1;
    return 0;

});

 console.log(courses)


