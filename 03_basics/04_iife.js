//Immediately Invoked Function Expressions

(function chai(){
    // named IIFE
    console.log(`DB connected`);
})();// it is important to write two IIFE

(    (name) => {
    console.log(`DB connected 2,${name}`);
})('Raj')