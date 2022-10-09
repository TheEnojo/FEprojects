let x = [1, 2, 3, 4, 5]

for (let i = 0; i < x.length; i++) {

    let b = x[0] + x[1] + x[2] + x[3] + x[4]
    console.log(b)

}

//let b = [1,2,3,4,5]

//const message = ['s', 'a', 'r', 'i', 'm', 'a'];


/*function addstrings(accumulator, currentValue) {
  return accumulator + currentValue;
}*/


/*let addstrings = message.reduceRight( (adder, currentv)  => {
return (adder + currentv) },"")

console.log(addstrings)*/

let user = [
    { name: 'Enojo', age: 19 },
    { name: 'Sarima', age: 18 },
    { name: 'Anna', age: 20 },
    { name: 'Edward', age: 20 },
    { name: 'Rejoice', age: 22 },
    { name: 'Somebody', age: 12 },
    { name: 'Lady', age: 15 }
]
// 1. return persons with age greater than or equal to 18
// 2. return persons with age less than or equal to 18
// 3. return an array that contains only the ages
// 4. return an object that has the name of the users as key and the ages as value

console.log(user.filter(obj => {
    return obj.age >= 18;
}));


console.log(user.filter(obj => {
    return obj.age <= 18;
}));


console.log(user.map(obj => {
    return obj.age;
}));

/*let swap = Object.entries(user).Object(
    ([name, age]) => ({[age]: name})
  );
   
swapObjects =  Object.fromEntries(swap);
   
console.log(swapObjects)*/





function swap(obj) {

    let swapped = Object.entries(obj).map(
        ([key, value]) => [value, key]
    );

    return Object.fromEntries(swapped);
}


console.log(
    swap({ name: 'enojo', age: 19 })
);




let  newArr = user.map()
console.log(newArr)



















