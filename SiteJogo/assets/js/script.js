function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg"; /* Aqui ele vai alterar o icone após clicar no botão */
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg"; /* Aqui ele vai alterar o icone após clicar no botão */
    }
}

const container = document.getElementById('container');
const cadastro = document.getElementById('cadastrobtn');
const escondido = document.getElementById('loginbtn');

cadastrobtn.addEventListener('click', ()=> {
    container.classList.add("active");
}) 

loginbtn.addEventListener('click', ()=> {
    container.classList.remove("active");
}) 
