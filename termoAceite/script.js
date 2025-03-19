

const checkBox = document.getElementById("aceito");

function Aceitar(){
    if(checkBox.checked){
        window.open("Solis.html")
    }
    else{
        window.alert("Você não clicou em aceitar")
    }
}