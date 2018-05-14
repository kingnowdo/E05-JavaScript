console.log("Começando");

function tri(){
    var user = prompt("Quantas linhas deve ter o seu triângulo?");
    for(var i=1;i<=user;i=i+1){
        var tex='';
        for(var x=0;x<i;x=x+1) tex = tex + '#';
        console.log(tex);
    }
}
