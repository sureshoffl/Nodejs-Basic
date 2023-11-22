const router = require('../routes/route');

module.exports = app => {
    app.use('/api', require('../routes/route'));
    app.get('/', (req,res) => res.send("server running*****"));

    //----Class----

    // class fly {
    //   constructor(brand,year) {
    //     this.brand = brand;
    //     this.year = year;
    //   }
    // }
    // const fl1 = new fly('aadi','2022')
    // const fl2 = new fly('volvo','2012') 

    // console.log(fl1.brand);
    // console.log(fl2.year);

    // const person = {
    //   data : "data is person",
    //   value : 232,
    //   return : true,
    //   calling : function oops() {
    //     return this.value + " " + this.data + "added"; 
    //   }
    // }

    // console.log(person);
    
    //try-catch block

    // try {
    //   function person(name,age) {

    //     console.log('DOG','25');
    //   }
    //   console.log(person());
    // } catch (error) {
    //   console.log('Error Occured' + error);
    // }

//mapping

// const log  = new Map();

// log.set('logger1',500);
// log.set('logger2',700);
// log.set('logger3',900);

// console.log(log.get('logger3'));

// const num = [9, 7, 6];

// const root = num.map((num) => Math.sqrt(num));
// console.log(root);

//Promise

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     console.log('Timedot');
//   },2000)
// })


// RegEx
// let a = 'Javascript Running';

// let r= a.replace('Javascript','JS');

// console.log(r);


//class
// const person = new class {
// speak() {
//   return 'class is created';
// }
// }
// console.log(person.speak());


//Promise
// const promise =  new Promise((req, res)=>{
// console.log('Promise is a Async');
// setTimeout(()=>{
//   console.log('Promise got error');
// })
// },2000);


// const prm = new Promise(function dec(resolve,reject) {
//   setTimeout(()=>reject(new Error('Error Occured!'),2000))
// });

//loops

// let i=0;

// do {
//   i++;
//   console.log(i);
// } while (i<7);


//switch case statement

// const prg = 'JS';

// switch (prg) {
//   case 'JAVA':
//     console.log('Java');
//     break;
// case 'PHP':
//   console.log('PHP');
//   break;
//   case 'JS':
//     console.log('JS');
//     break;
//   default:
//     break;
// }



// async function

// function resolveAfter2Seconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('resolved');
//     }, 2000);
//   });
// }

// async function asyncCall() {
//   console.log('calling');
//   const result = await resolveAfter2Seconds();
//   console.log(result);
//   }
// asyncCall();


//indexed collection
//---- Array, TypedArray object ----
//closures

//----- ES6 ------
// new Syntax 

// const myFunc =(prg,year) => {
//   return `The ${prg} Language ${year}..`
// }
// console.log(myFunc('JS',1997));

// const dash = {
//   name : 'JS',
//   year : 97
// }
// console.log(dash);


// <-- Rest Operator --> indefinte number of arguments & bundle them in an array
// function rest(...args) {
//   let s = 0;
//   for(let i of args){
//   s += i 
//   }
//   return s;
// }
// console.log(rest(3,1,7,2));

// < --- Spread Operator --- >

// const spread = 'operator';
// console.log(...spread);

//Event Loop

// console.log("Before delay");

// function delayBySeconds(sec) {
// let start = now = Date.now()
// while(now-start < (sec*1000)) {
// 	now = Date.now();
// }
// }

// delayBySeconds(5);

// // Executes after delay of 5 seconds
// console.log("After delay");


//  ---- Reducer() 

// const prg = [
//    { name : 'JS', year : 1997},
//    { name : 'PHP', year : 1992} ] 
// const years = prg.reduce((t, p)=>{
// return t + p.year;
// })

// console.log(years);

//  < ---- Multiple callback within a function  ---- >



// < --- Promise Chaining --- >  .then() --> 2 arguments (resolve, reject)


// let job = new Promise(function (Resolve,Reject) {
//     const user = {
//         name : 'example',
//         id : '81292',
//         email : 'example@gmail.com'
//     };
//     Resolve(user);
//     });

//     job
//     .then(function (user) {
//         console.log(`Got User : ${user.name}`); 
//     })

//     job
//     .then(function (user) {
//         console.log(`Got Email : ${user.email}`);
//         return user.id
//     }) 

//     .then(function (id) {
//         console.log(`Got ID : ${id}`);
//     })



 }


