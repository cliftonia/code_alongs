// // address =- 45 william st melbourne 3000

// // lat, lng

// // 20 degreese

// // clothing api

// $.ajax(geocodeApiUrl).then(res => {
//   // lat lng from response
//   $ajax(weatherApiUrl).then(res => {
//     // temperature from the response

//     $.ajax(clothingApiUrl).then(() => {
//       //
//     });
//   });
// });

// function age() {
//   return 1;
// }

// age() + 1;

// function luckyNumbers() {
//   return [1, 2, 3]; //array
// }

// function nickname() {
//   return "hackerman";
// }

// function double(a, b) {
//   return a + a;
// }

// function sum(a, b) {
//   return a + b;
// }

// //composition
// double(sum(1, 1)); // 4

// function greeting() {
//   console.log("hello Dt");
// }

// function greeting(name) {
//   console.log(`Hello ${name}`);
// }

// function greeting(name, male = true) {
//   console.log(`Hello ${male ? "mr" : "ms"} ${name}`);
// }

// function greeting(name, male = true, formal = false) {
//   console.log(`${formal ? "hello" : "sup"} ${male ? "mr" : "ms"} ${name}`);
// }

// let greet = name => `hello ${name}`;
// let casuallyGreet = name => `sup ${name}`;
// let male = name => `mr. ${name}`;
// let female = name => `ms. ${name}`;
// let dr = name => `dr. ${name}`;
// let prof = name => `prof ${name}`;

// greet(prof("X"));
// casuallyGreet(dr("who"));

// // setTimeout()
// // axios.get()

// // async

// function getMovie() {
//   return $ajax().done(res => {
//     return res.Movie;
//   });
// }

// var promiseYouWillEventuallyGetTheMovie = getMovie();

// lets have a new type - this is new type is call a promise
// consistency and conventions

function getMoney() {
  return Promise.resolve(14);
}

async function main() {
  money = await getMoney();
  console.log(money);
}

main();

console.log("me first");

// getMoney().then(val => console.log(val)); // then

// app.get("/", () => {
//   getMoney().then(() => {
//     res.send();
//   });
// });

// var promise = axios.get();
// if () {

// }

// promise.then();
