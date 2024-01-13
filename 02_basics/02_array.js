const marvel_heros=["IronMan","thor","loki","Hulk"]
const dc_heros=["superMan","flash","batMan","aquaMan"];
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

const allHeros=marvel_heros.concat(dc_heros);
// console.log(allHeros);
const all_new_Heros=[...marvel_heros,...dc_heros]// spread 
console.log(all_new_Heros);

const another_array=[1,2,3,4,5,[5,6,7],8,[9,11,[3,4,5,[6,9,0]]]]
const real_another_aray=another_array.flat(Infinity);
console.log(real_another_aray);



console.log(Array.isArray("Preety"))
console.log(Array.from("Saniya"));
console.log(Array.from({name:"Raju"}))//intresting

let score1=12;
let score2=14;
let score3=15;
console.log(Array.of(score1,score2,score3));