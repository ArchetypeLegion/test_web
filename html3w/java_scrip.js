document.querySelector('.burgerMenu').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.head_menu').classList.toggle('open');
})