function addTwoNum(num1,num2){
    console.log("Saniyaa");
    return(num1+num2);
}

let result=addTwoNum(45,6);
console.log("Result:",result);


function loggedIn(username){
    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} had just logged in`
}

// console.log(loggedIn("Saniyaa chaudhary"));
console.log(loggedIn());

function calculateCartPrice(...num1){
    return num1;
}

console.log(455,677,88,999);