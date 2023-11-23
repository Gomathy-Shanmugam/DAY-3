//How to compare two JSON having same properties
let object1 = {name: "Person 1", age: 5};
let object2 = {age: 5, name: "Person 1"};

if (JSON.stringify(object1) === JSON.stringify(object2)) {
    console.log("True");
} else {
    console.log("False");
}