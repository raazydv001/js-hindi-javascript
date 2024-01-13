//singleton---object.create

// object-literals

const symbl=Symbol("key1");
const JsUser= {
    name:"Raju",
    age:20,
    location:"Coimbatore",
    "full name":"Raj Kumar Yadav",
    email:"Raju@google.com",
    isLoggedIn:false,
    lastLoggedInDays:["sunday","tuesday"],
    [symbl]:"mykey1",
}

console.log(JsUser.email)
console.log(JsUser["email"]);
console.log(JsUser[symbl]);
console.log(typeof JsUser[symbl])

JsUser.email="Rajkumar@gmail.com"
// Object.freeze(JsUser);
JsUser.email="Bairaghi1234@gmail.com"
console.log(JsUser);


//function in object
JsUser.greeting= function(){
    console.log("Hello JS users");
}
JsUser.greetingTwo = function(){
    console.log(`hello js user,${this["full name"]}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

