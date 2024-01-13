const arr =[1,2,3,4,5]
const heros = ["shaktimaab","naagraaj"]
const arr2 = new Array(56,78,9,9,9)


// Array method
arr.push(78);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(99);// adding value at first index and shiffting all element forward
console.log(arr);

arr.shift();//removing first value 
console.log(arr)
console.log(arr.includes(2));
console.log(arr.indexOf(4));

const newArr=arr.join()

console.log(newArr);
console.log(typeof newArr)
console.log("A ", arr)
const myn1=(arr.slice(1,4));
console.log(myn1)
console.log("B ",arr);

const myn2 = arr.splice(1,4);/* splice manupulate the original array 
and 1 to 4 range is incldude it can extract the value from 
origianl array*/
console.log(myn2)

console.log("C ",arr)//



