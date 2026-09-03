const menu = document.querySelector('.menu');

function apareceMenu(){
    if (menu.style.display == 'block'){
        menu.style.display = 'none'
    }
    else{
        menu.style.display = 'block'
    }

}

function mudarTamaho(){
    if (window.innerWidth >= 768){
        menu.style.display = 'block';
        menu.style.width = '100%';
    }
    else{
        menu.style.display = 'none';
        menu.style.width = '200px';
    }
}