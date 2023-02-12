const coba = new Promise((resolve) => {
  setTimeout(() => {
    resolve("selesai");
  }, 2000);
});

console.log(coba);
console.log("satu");
coba.then((coba) => console.log(coba));
console.log("dua");

// function cobaPromise() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("selesai");
//     }, 2000);
//   });
// }

// // const coba = cobaPromise();
// // coba.then(() => console.log(coba));

// async function cobaAsync() {
//   const coba = await cobaPromise();
//   console.log(coba);
// }

// cobaAsync();
