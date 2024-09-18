// line by line statement in js called sychronous programming
// console.log("one");
// console.log("two");
// console.log("three");


//Asychronous programming
// console.log("start");
// setTimeout(() => {
//     console.log("Hello World");
// },  5000)

// console.log("End");



setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}



// // Call back
// function sum(a,b){
//   console.log(a+b);
// }
// function calaculator(a,b, sumCallback){
//     sumCallback(a,b)
// }
// calaculator(3,5, sum)



// function myDisplayer(something) {
//     document.getElementById("demo").innerHTML = something;
//   }
  
//   function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//   }
  
//   myCalculator(5, 5, myDisplayer);



//   function calaculator(a,b, sumCallback) {
//     sumCallback(a,b)
//   }
//   calaculator(7,8, sum)


 

//callback hell
// function getData(dataId, getNextdata){
//     setTimeout(() =>{
//         console.log("data", dataId);
//         if(getNextdata){
//             getNextdata()
//         }
//     },4000 )
// }
// getData(1, () =>{
//     console.log("Loading for data 2");
//   getData(2, () =>{
// console.log("Loading for data 3");
//     getData(3, () =>{

//     })

//   })
// })
// getData(1)
// getData(3)
// getData(4)
// getData(5)



//Promise and callback
//promise: A Promise is an object representing the eventual completion or failure of an asynchronous operation.



// let promise = new Promise((resolve,reject) =>{
//     console.log("I am  a promise");
//    // resolve("I am resolved")
//     reject("I am reject")
// })



// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 0;
  
//   // some code (try to change x to 5)
  
//     if (x == 0) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });
  
//   myPromise.then(
//     function(value) {
//         myDisplayer(value);},
//     function(error) {
//         myDisplayer(error);}
//   );


// let complete = true
// let prom = new Promise(function(resolve, reject){
//  if(complete){
//   resolve("I am Success")
//  }
//  else{

// reject("I am Failure")
//  }
// })
// console.log(prom);




let promise = new Promise(function(resolve, reject){
  let x = "Hello World"
  let y = "Hello World"
  if(x==y){
    resolve()
  }
  else{
    reject()
  }
})
promise.then(function(){
  console.log("I am Resolved");
})
.catch(function(){
  console.log("I am Failure");
})


function prom(a,b){
  return new Promise(function(resolve, reject){
    console.log("Fecthing data, please wait");
    let division = a/b
    setTimeout(() =>{
      if (a,b){
        resolve("Your answer: "+ division)
      }
      else{
        reject("Failed to calculate")
      }
    }, 2000)
  })
}
prom(12,3).then((result) =>{
  console.log(result);
})
.catch((error) =>{
  console.log(error);
})