function clicou() {
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    console.log(document.getElementById("agradecimento"));

    //alert("Obrigado por clicar");
}

function redirecionar() {
    window.open("https://globallabs.academy/"); //outra aba
    //window.location.href ="https://globallabs.academy/";
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";

}

function load() {
    alert("pagina carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}
/*function soma(n1, n2) {
    return n1 + n2;
}

function validaIdade(idade) {
    var validar;
    if (idadae >= 18) {
        var validar = true;
    } else {
        validar = false
    }
    return validar;

}
var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
/*function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}
alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));


/*var d = new Date();
alert(d.getMinutes());

/*var count;
for(count=0;count <=5; count++){
    alert(count);
};









/*var count = 0;
while (count <= 5) {
    console.log(count);
    alert(count);
    count = count + 1;//ou ++
}
var idade = prompt("Qual sua idade");
if (idade >=18){
    alert("maior de idade");
    }
    else{
        alert("menos de idade")
    };








//lista de dicionario
var frutas = [{ nome: "maça", cor: "vermelha" }, { nome: "uva", cor: "roxa" }]
console.log(frutas);
alert(frutas[1].nome)



var fruta ={nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);



var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();
console.log(lista[1]);
console.log(lista.length); //quantidade
//reverse... inverte
console.log(lista.toString());
console.log(lista.toString()[0]);
console.log(lista.join("|"));


alert(lista[1]);


var nome = "Rafael Galleani";
var idade= 29;
var idade2 = 10;
var frase="Japão é o melhor time do mundo"


//alert(nome+" tem "+ idade+" anos");
alert(idade+ idade2);
//se as variaveis fosse entre aspas, ele entenderia como string, ai iria concatenar
console.log(nome);
console.log(idade+idade2);
console,log(frase.toUpperCase());//tudo maiusculo,lower,minusculo
//alert(frase.replace("Japão","Brasil"));*/