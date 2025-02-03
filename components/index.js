document.body.style.backgroundColor = "rgb(48, 49, 48)";
const body = document.body

const main = document.createElement('main');//Criação da main
body.appendChild(main); //Adiciona a main ao body

//criando um link entre o css e js
const link = document.createElement('link'); //Criando o elemento link
link.rel = 'stylesheet'; //definindo o tipo de link
link.href = 'index.css'; //caminho do arquivo css externo
document.head.appendChild(link); //colocando o elemento link dentro do head





