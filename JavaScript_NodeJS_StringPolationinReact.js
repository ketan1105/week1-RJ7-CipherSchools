// const myname = "ketan"
// console.log(myname)

// // const myname = "Alex" //this will give error 

// let myname = "ketan"
// console.log(myname)
// myname = 5
// console.log(myname)
// myname = "shiv"
// console.log(myname)

// {
//     var num = 5; //globally scoped
// }

// console.log(num)

// let firstname = "ketan"
// let seconedname = "jain"

// console.log(firstname + ' ' + seconedname) //string concatination
// let fullName = `My name is ${firstname} ${seconedname}`  // string interpolation
// console.log(fullName) 

//function

// function addTwoNumbers(num1 , num2){
//     return num1+num2;
// }

// const addTwoNumbers = (num1,num2) =>{
//     return num1+num2;
// }
// console.log(addTwoNumbers(9,9));


// function addTwoNumbers(num1 , num2 = 9){
//     console.log(num1)
//     console.log(num2)
//     console.log(num1+num2)
// }

// addTwoNumbers(5,8);

//spread operator

// const movies = ["PK","malang","ABCD"]
// const games = ["COD"]
// const webseries = ["Dark","Delhi Crime","Money Heist","The Boys"]

// let recommend = [...movies,...games,...webseries]
// console.log(recommend)

//res operator

// function names(name1,name2,...names){
//     console.log(name1)
//     console.log(name2)
//     console.log("Res operator converted elements to array : " , names)
//     console.log("Spread operator converted an array to individual elements : ", ...names)
// }

// names("Ashi","Ketan","Ayush","Krishna") 


//for objects

let object = {
    name : "ketan",
    age : 24,
    address : {
        city : "hathras",
        pincode : 204101
    }
}

let object2 = {...object , name : "jay"}
console.log(object.name)
console.log(object2.name)
object2.address.city = "Aligarh"
console.log(object2)





