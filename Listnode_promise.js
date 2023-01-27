//list node


// class ListNode {
//     val ;
//     next ;

//     constructor(val,next = null){
//         this.val = val;
//         this.next = next;
//     }
// }

// class TestClass {
//     head ;

//     constructor(head = null){
//         this.head = head;
//     }


//     hasLast(){
//         return this.head !== null;
//     }

//     getLast(){
//         if(!this.hasLast()){
//             return null;
//         }
//         let current = this.head;
//         while(current.next !== null){
//             current = current.next;
//         }
//         let findValue = current.val;
        
//         current = this.head;
//         while(current.next.next !== null){
//             //1 2 3 4 5
//             current = current.next;
//         }
//         current.next.next = null;
//         return findValue;
//     }
// }

// let myVariable = new TestClass(
//     new ListNode(
//         1,
//         new ListNode(2,new ListNode(3,new ListNode(4,new ListNode(5))))
//     )
// ); //[1,2,3,4,5]

// console.log(myVariable.getLast());
// console.log(myVariable.getLast());
// console.log(myVariable.getLast());
// console.log(myVariable.getLast());
// console.log(myVariable.getLast());
// console.log(myVariable.getLast());




//promise
//constructor function

// let myPromise = new Promise((fulfillied,notFulfilled) => {
//     let num1 = 10;
//     let num2 = 15;
//     let sum = num1 + num2;
//     if(sum > 24){
//         fulfillied();
//     }
//     else{
//         notFulfilled();
//     }
// });

// myPromise
//     .then(() => {
//         console.log("Promise is FulFilled")
//     })
//     .catch(() => {
//         console.log("Promise is not FulFilled")
//     });

// function addTwoNumbers(num1 , num2){
//     // 2 3
//     let sum = 0;
//     setTimeout(() =>{
//         console.log(num1+num2);
//     },5000);
//     console.log("Inside addTwoNumbers");
//     return sum;
// }

// console.log(addTwoNumbers(2,3));

function addTwoNumbers(num1 , num2){
    return new Promise((fulfilled,notFulfilled) =>{
        setTimeout(() =>{
            console.log("Inside setTimeout");
            fulfilled(num1 + num2);
        },5000);
        notFulfilled(new Error("an error occured"));

    });
}
    addTwoNumbers(3,5)
    .then(() => {
        console.log("Promise is FulFilled")
    })
    .catch(() => {
        console.log("Promise is not FulFilled")
    });

    



