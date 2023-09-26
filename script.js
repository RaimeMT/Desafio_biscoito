const abrir = document.querySelector('#abrir');
const btnReset = document.querySelector('#btnReset');
const biscoito1 = document.querySelector(".biscoito1");
const biscoito2 =  document.querySelector(".biscoito2");


abrir.addEventListener('click', onClick)
btnReset.addEventListener('click', onClick);



function onClick () {
  toggleScreen()
 
}

function toggleScreen() {
  biscoito1.classList.toggle("hide");
  biscoito2.classList.toggle("hide");
}