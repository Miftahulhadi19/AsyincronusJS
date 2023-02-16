// class Profesor {
//   constructor(nama, teaches) {
//     console.log(`Hallo nama saya ${nama}, saya mengajar ${teaches}`);
//   }
// }

// const profesor = new Profesor('Rahul', 'programmer');
// console.log(profesor);

// class Profesor {
//   constructor(nama, teaches) {
//     this.nama = nama;
//     this.teaches = teaches;
//     console.log(`Hallo nama saya ${this.nama}, saya sebagai ${this.teaches}`);
//   }
//   introduceSelf(nama) {
//     console.log(`Hallo ${nama}, saya seorang ${this.teaches}`);
//   }
// }

// const profesor = new Profesor('Miftahul', 'programmer');
// profesor.introduceSelf('Hadi');

// Inheritence
// class Employe {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHallo(name) {
//     console.log(`Hello ${name} My Name is Employee ${this.name}`);
//   }
// }

// class Manager extends Employe {}

// const hadi = new Employe('Hadisama');
// hadi.sayHallo('Mif');
// const miftah = new Manager('Ul sama');
// miftah.sayHallo('Mif');

// console.log(hadi);
// console.log(miftah);

// Class super constractor
// class Employe {
//   constructor(firstName) {
//     this.firstName = firstName;
//   }
//   sayHallo(name) {
//     console.log(`Hallo ${name}, My name is ${this.firstName}`);
//   }
// }

// class Manager extends Employe {
//   constructor(firstName, lastName) {
//     super(firstName);
//     this.lastName = lastName;
//   }

//   sayHallo(name) {
//     console.log(`Hallo ${name}, My name is ${this.firstName} ${this.lastName}`);
//   }
// }

// const employe = new Employe('Hadi');
// employe.sayHallo('Mif');

// const manager = new Manager('Aufa', 'Baladika');
// manager.sayHallo('Mif');

// console.log(employe, manager);

// Class super method
class Shape {
  pain() {
    console.log('pain shape created');
  }
}

class Circle extends Shape {
  pain() {
    super.pain();
    console.log('pain circle created');
  }
}

const circle = new Circle();
circle.pain();
