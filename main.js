console.log("Começando");

function tri(){
    var user = prompt("Quantas linhas deve ter o seu triângulo?");
    for(var i=1;i<=user;i=i+1){
        var tex='';
        for(var x=0;x<i;x=x+1) tex = tex + '#';
        console.log(tex);
    }
}

function xadrez(){
    var user = prompt("Quantas linhas deve ter o seu Tabuleiro de Xadrez?");
    var casa='#';
    for(var i=0;i<user;i=i+1){
        casa= casa == '#' ? ' ' : '#';
        var tex='';
        var casaT = casa;
        for(var x=0;x<user;x=x+1){
            casaT= casaT == '#' ? ' ' : '#';
            tex = tex + casaT;
        }
        console.log(tex);
    }
}

function palindromo(){
    var user = prompt("Insira uma frase");
    var tex = '';
    for(var i =0; i<user.length; i = i+1){
        tex= tex + user.charAt(user.length-(i+1));
    }
    if(tex==user) console.log("sim, é um palíndromo")
}
