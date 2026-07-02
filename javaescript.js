const botao = document.getElementById("modo");

botao.onclick = () => {

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){
botao.innerHTML="🌙";
}else{
botao.innerHTML="☀️";
}

}