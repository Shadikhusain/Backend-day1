// require("./second")

// function sum(a, b) {
//     console.log(a + b);

// }
// ye function aaya to hai but as a Private variable ki tarah aaya h

// ############## ye IIFE:(ek function ke ander wrap ho jata hai) #########
(function() {
    console.log("Hello, I am Second");

    function sum(a, b) {
        console.log(a + b)
    }

})();
// sum(3, 4);

console.log("Hello, I am first");

//############## Mujhe dono files ka code ek saath run kerna hai to kaise kre #############
// I need second.js code in my first.js