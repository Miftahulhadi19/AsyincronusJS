// class Profesor {
//   constructor(nama, teaches) {
//     console.log(`Hallo nama saya ${nama}, saya mengajar ${teaches}`);
//   }
// }

// const profesor = new Profesor('Rahul', 'programmer');
// console.log(profesor);

class Profesor {
  constructor(nama, teaches) {
    this.nama = nama;
    this.teaches = teaches;
    console.log(`Hallo nama saya ${this.nama}, saya sebagai ${this.teaches}`);
  }
  introduceSelf() {
    console.log(`Hallo ${this.nama}, saya seorang ${this.teaches}`);
  }
}

const profesor = new Profesor('Miftahul', 'programmer');
profesor.introduceSelf();
