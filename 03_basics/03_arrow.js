const user={
    username:"preetyJaiswal",
    age:20,
    
    welcomeUser :function(){
    console.log(`${this.username},namste jii`);
    console.log(this);
    }
}

// user.welcomeUser()
// user.username="Raj";
// user.welcomeUser()


// arrow function

const chai = () => {
    let username="saniyaa"
    console.log(this.username);

}
// chai()

// const addTwo = (num1,num2 ) =>{
//     return num1+num2
// }


// implicit return
// const addTwo = (num1,num2 ) =>  (num1+num2)
const addTwo = (num1,num2 ) =>  ({username:"saniyaaa"})

console.log(addTwo(44,5))