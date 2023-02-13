const btn = document.querySelector('.btn');

const callback = () => {
  console.log('Hello world!');
};

btn.addEventListener('click', function () {
  setTimeout(callback, 2000);
  console.log('success click button');
});
