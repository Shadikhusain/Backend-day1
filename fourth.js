console.log("Hello, I am Fourth");

function sum(a, b) {
    console.log(a + b);
}

function sub(a, b) {
    console.log(a - b);
}
// module.exports = sum;
//ek se jyada ke fun hai to as an object pass kara sakte hai

// ye ek empty object hai
console.log(module.exports);
// (key,value) same hai to only key hi de do no problem
// module.exports = { sum, sub }
// module.exports = { sum: sum, sub: sub }
module.exports.sum = sum;
module.exports.sub = sub;