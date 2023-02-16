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
// const names = ['andi', 'surya', 'patino', 'narji'];
// async function forEach(arr, cb) {
//   for (let i = 0; i < arr.length; i++) {
//     const element = await arr[i];
//     cb(element);
//   }
// }
// console.log('satu');
// forEach(names, (name) => {
//   console.log(name);
// });
// console.log('tiga');

// const myForEach = (arr, cb) => {
//   arr.forEach((name) => {
//     cb(name);
//   });
// };

// myForEach(names, (name) => {
//   console.log(name);
// });

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

// 1
// function weatherReceive(data) {
//   let weather = data;
//   console.log(weather);
// }

// function getWeather(cb) {
//   setTimeout(() => {
//     cb('sunny');
//   }, 2000);
// }

// getWeather(weatherReceive);

// 2
// function getWeather() {
//   return new Promise((resolve, reject) => {
//     resolve('sunny');
//   });
// }

// getWeather().then(
//   function (data) {
//     console.log(`first result ${data}`);
//   },
//   function (err) {
//     console.log(`second result ${err}`);
//   }
// );

// 3

function getWeather() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve('snaow');
    }, 000);
  });
}

function getWeatherStatus(weather) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      switch (weather) {
        case 'sunny':
          resolve('it rain');
          break;
        case 'snow':
          resolve('it cold');
          break;
        default:
          reject('status not found');
      }
    }, 2000);
  });
}

const onSuccess = (data) => {
  console.log(`success: ${data}`);
};

const onError = (err) => {
  console.log(`error: ${err}`);
};

getWeather().then(getWeatherStatus).then(onSuccess, onError);
