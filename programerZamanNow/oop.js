// Constructor Function (non parameter)
// function Person() {
//   this.firstName = '';
//   this.lastName = '';
//   this.sayHallo = function (name) {
//     console.log(`Hallo ${name}, nama saya ${this.firstName}`);
//   };
// }

// const hadi = new Person();
// hadi.firstName = 'Miftahul';
// hadi.lastName = 'Hadi';
// hadi.sayHallo('hadi');

// Constructor Function (parameter)

// function Person(firstName, lastName) {
//   (this.firstName = firstName),
//     (this.lastName = lastName),
//     (this.sayHallo = function (name) {
//       console.log(
//         `Hallo ${name}, nama depan saya ${this.firstName}, dan nama belakang saya ${this.lastName}`
//       );
//     });
// }

// const name = new Person('Miftahul', 'Hadi');
// name.sayHallo('joko');

// const person = {
//   name: ['Miftahul', 'hadi'],
//   age: 23,
// };
// function logProperti(propertiName) {
//   console.log(person[propertiName]);
// }

// logProperti('name');
// logProperti('age');

// const person1 = {
//   name: 'Jhon',
//   introduceSelf() {
//     console.log(`Hi My Name is ${this.name}`);
//   },
// };

// function cetak(name) {
//   return name.introduceSelf();
// }
// cetak(person1);

// function createPerson(name) {
//   let obj = {};
//   obj.name = name;
//   obj.introduceSelf = function () {
//     console.log(`Hi My Name is ${this.name}`);
//   };
//   return obj;
// }
// const nama = createPerson('Miftah');
// nama.name;
// nama.introduceSelf();

// const cat = {
//   name: 'Bertie',
//   breed: 'Cymric',
//   color: 'white',
//   greeting: function () {
//     console.log('Meow!');
//   },
// };
const myObject = {
  city: 'Madrid',
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};
