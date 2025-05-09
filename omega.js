// Navigation menu Bar 
// Reference 
const bugerMenu = document.querySelector('.js-menu');
const navbar = document.querySelector('#navbar');
const handMenuDiv = document.querySelectorAll('.js-div');
const checkInput = document.querySelector('#menyAvPaa')
bugerMenu.addEventListener('click', () => {
  if(checkInput.checked == false){
    navbar.style.display = 'flex'
    navbar.style.animation = 'slideIn 0.5 ease-in';
  }else{
    navbar.style.animation = 'slideOut 0.5s ease-in-out ';
    navbar.style.display = 'none'
  }
});