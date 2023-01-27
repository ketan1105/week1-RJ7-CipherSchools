// let array = [1,2,3,4,5]
// let newarray = []

// for(let i=0;i<array.length;i++){
//     newarray[i] = array[i]*array[i]
// }

// console.log(newarray)


//1 map

// function functionformap(element){
//     return element*element;
// }
// let array = [1,2,3,4,5]
// let newarray = array.map(functionformap);
// console.log(newarray);
// let array = [5,6,7,8,9]
// let newarray = array.map((elements) => {
//     return elements*elements
// })

// console.log(newarray)


//2  foreach
// let array = [1,2,3,4,5]
// array.forEach((element,index) =>{
//     console.log(element)
// })


// let array = [1,2,3,4,5]
// array.forEach((element,index) =>{
//     element *= element
//     console.log(element)
// })


//3.filter

// let array = [15,36,67,28,99]
// let newarray = array.filter((elements) => {
//     return elements >=30;
// })

// console.log(newarray)

//4. find
// let array = [15,36,67,28,99]
// let temp = array.find((value) => {
//     return value >50;
// })
// console.log(temp)


//sort
// let array = [15,36,67,28,99]
// let sortedArray = array.sort()
// console.log(sortedArray)


// let array = [15,36,67,28,111,,99]
// let sortedArray = array.sort((el1,el2) => {  //comparitive function
//     el1 = Number(el1);
//     el2 = Number(el2);
//     return el1-el2;
// })
// console.log(sortedArray)

//map and set

let map = new Map()
map.set(1,"ketan")
map.set(2,"jain")
console.log(map)
map.values();






