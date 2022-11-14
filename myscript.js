
function clickMenu(){
    if (items.style.display == "block"){
        items.style.display = "none"
    }
    else{
        items.style.display = "block"

    }
}


const nome = prompt ('Digite seu nome: ');
document.querySelector('#id-nome').textContent = `Bem-vindo... ${nome} `