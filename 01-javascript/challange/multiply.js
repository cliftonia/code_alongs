// console log odd numbers from 1 to 20

// let multiply = 9;

// for (let nine = 0; nine <= 10; nine += 1) {
//   if (nine % 3 === 0) {
//     for (let counter = 0; counter <= 10; counter += 1) {
//       console.log(result);
//     }
//   }
// }

for (let counter = 0; counter <= 10; counter += 1) {
  console.log(counter + " * 9 = " + 9 * counter);
}

for (let i = 1; i <= 10; i++) {
  if (i === 1) {
    console.log(`${i} time table`);
  } else {
    console.log(`${i} times table`);
  }
  for (let j = 1; j <= 10; j++) {
    console.log(i + " * " + j + " = " + j * i);
  }
  console.log("=================");
}
