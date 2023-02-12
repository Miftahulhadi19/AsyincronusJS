// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=20a258b2&s=avengers",
//   success: (movies) => {
//     const search = movies.Search;
//     console.log(search);
//   },
//   // success: ({ Search }) => console.log(Search),
// });

// const movies = fetch("http://www.omdbapi.com/?apikey=20a258b2&s=avengers");
// console.log(movies);

// Promise
/* Object yang merepresantasikan keberhasilan / kegagalan sebuah event yang asyncronus di masa yang akan datang 
- janji ( terpenuhi / ingkar)
- states (fulfilled / rejected / pending)
-- callback (resolve / reject / finally)
-- aksi (then / catch) */

// Contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("Janji telah di tepati");
//   } else {
//     reject("Ingkar janji");
//   }
// });

// janji1
//   .then((response) => console.log("Ok : " + response))
//   .catch((response) => console.log("Not Ok : " + response));

// Contoh 2
// let ditepati = false;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve('Janji ditepati setelah beberapa saat');
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject('Janji tidak ditepati ');
//     }, 2000);
//   }
// });

// console.log('satu');
// console.log(
//   janji2
//     .then((response) => console.log(response))
//     .catch((response) => console.log(response))
// );
// // janji2
// //   .finally(() => console.log("selesai menunggu"))
// //   .then((response) => console.log("Ok : " + response))
// //   .catch((response) => console.log("Not Ok : " + response));
// console.log('dua');

// const name = new Promise((resolve, reject) => {
//   const iputName = prompt('masukkan nama anda');
//   if (iputName == 'Miftahul Hadi') {
//     resolve('Nama anda sesuai');
//   } else {
//     reject('nama ada tidak sesuai');
//   }
// });

// name
//   .then((response) => {
//     alert(response);
//   })
//   .catch((error) => {
//     alert(error);
//   });
// const fetchPromise = fetch(
//   'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
// );

// 1
// fetchPromise.then((response) => {
//   const jsonPromise = response.json();
//   jsonPromise.then((data) => {
//     console.log(data[0].name);
//   });
// });

// 2
// fetchPromise
//   .then((response) => response.json())
//   .then((data) => console.log(data[0].nama));

// fetchPromise
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data[0].name);
//   })
//   .catch((error) => {
//     console.error(`Could not get products: ${error}`);
//   });

// fetchPromise
//   .then((response) => {
//     if (!response.ok) {
//       alert(response.message);
//     }
//     response.json();
//   })
//   .then((data) => {
//     console.log(data[0].name);
//   })
//   .catch((error) => {
//     console.error(`Could not get products: ${error}`);
//   });
