// function kalikan(a, b) {
//   return a * b;
// }
// function hitungLuas(sisi) {
//   return kalikan(sisi, sisi);
// }
// function cetakLuasKota(sisi) {
//   const luas = hitungLuas(sisi);
//   console.log(luas);
// }

// cetakLuasKota(10);

// function halo(nama) {
//   alert(`hallo ${nama}`);
// }

// function tampilPesan(callback) {
//   const nama = prompt('masukan nama');
//   callback(nama);
// }

// tampilPesan(halo);

// Callback function
/* Function yang di kirimkan sebagai parameter pada function yang lain*/

// setTimeout(() => {
//   console.log('halo');
// }, 1000);

// const hallo = () => {
//   console.log('halo');
// };
// setTimeout(hallo, 1000);

// const names = ['andi', 'surya', 'patino', 'narji'];
// names.forEach((name) => console.log(name));
const names = ['andi', 'surya', 'patino', 'narji'];
// async function myForeach(arr, cb) {
//   for (let i = 0; i < arr.length; i++) {
//     const element = await arr[i];
//     cb(element);
//   }
// }
// const myForeach = (arr, cb) => {
//   arr.forEach((e) => {
//     cb(e);
//   });
// };
// console.log('1');
// myForeach(names, (name) => {
//   console.log(name);
// });
// console.log('3');

// const pokemon = (id, cb) => {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     .then((res) => res.json())
//     .then((data) => cb(data));
// };
// pokemon(56, (result) => {
//   console.log(result);
// });

// function PizzaReady(eat) {
//   console.log(`eat ${eat}`);
// }

// function orderPizza(callback) {
//   setTimeout(() => {
//     const pizza = 'The Pizza';
//     callback(pizza);
//   }, 2000);
// }

// orderPizza(PizzaReady);

// function ready(name) {
//   console.log(`eat the ${name}`);
// }

// function orderPizza(callback) {
//   setTimeout(() => {
//     const name = 'Pizza';
//     callback(name);
//   }, 2000);
// }

// orderPizza(ready);

// let stock = {
//   fruit: ['banana', 'strobary', 'coklat'],
// };

// let order = (nameFruit, production) => {
//   setTimeout(() => {
//     console.log(`${stock.fruit[nameFruit]}, was selected`);
//     production();
//   }, 2000);
// };

// let production = () => {
//   setTimeout(() => {
//     console.log('processing production');

//     setTimeout(() => {
//       console.log('the fruit is ready');
//     }, 2000);
//   }, 000);
// };
// order(0, production);
