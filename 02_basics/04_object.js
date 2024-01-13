// const tinderUser= new object() - singleton

const tinderUsr={}

tinderUsr.id="1234@"
tinderUsr.name="Saniya"
tinderUsr.isloggedIn=true;
// console.log(tinderUsr);

const regularUser ={
    fullName:{
        userFullName:{
            firstName:"Saniya",
            lastName:"Chaudhary"
        }

    }
}
// console.log(regularUser.fullName.userFullName.firstName);



// merge two object
const obj1={
    1:"a",
    2:"b",
}
const obj2={3:"c",4:"d",}

// const obj3=Object.assign({},obj1,obj2);
const obj3={...obj1,...obj2}
// console.log(obj3);


const user=[
    {
        id:11,
        email:"Saniya@gmail.com"
    },
    {
        id:11,
        email:"Saniya@gmail.com"
    },
    {
        id:11,
        email:"Saniya@gmail.com"
    },
    {
        id:11,
        email:"Saniya@gmail.com"
    },
]
user[1].email
// console.log(tinderUsr);
// console.log(Object.keys(tinderUsr));

// console.log(Object.values(tinderUsr));

// console.log(Object.entries(tinderUsr));

// console.log(tinderUsr.hasOwnProperty("isloggedIn"))


// de-structure

const course={
    courseName:"js in hindi",
    price:999,
    courseInstructure:"hitesh",
}

const{courseInstructure:teacher}=course;
// console.log(courseInstructure);
console.log(teacher);

