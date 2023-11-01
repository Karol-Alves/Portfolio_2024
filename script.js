//Função surgir texto
function typeWritter(texto,idElemento,tempo){
    var char = texto.split('').reverse();
    var typer = setInterval(function () {
        if (!char.length) return clearInterval(typer);
        var next = char.pop();
        document.getElementById(idElemento).innerHTML += next;
    }, tempo);
}
typeWritter('Bem-vindo ao meu portfólio__','log',250)