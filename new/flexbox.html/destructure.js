const person={
    firstName:"Tejas",
    lastName:"MK",
    weight: 70,
    height: 6
};
let weight=person.weight;
let height=person.height;
console.log(`${person.firstName} measurements are weight:${weight}kg and height:${height}ft`);



const one=[1,2,3];
const three=[7,8,9]
const two=[...one ,4,5,6, ...three];
console.log(two);


const per={
    name:"Tejas",
    weight:75,
    height:6
};
const{name, ...rest}=per;
console.log(rest);



let val1=2;
let val2=2;
if(val1===val2)
{
    console.log("true");
}else{
    console.log("False");
}