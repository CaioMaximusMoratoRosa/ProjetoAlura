var textInput = document.querySelector("#input__caixaTexto__texto");
var outInput = document.querySelector("#output");

function criptografar(){
    var texto = textInput.value;

    var cripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

    document.getElementById('output').innerHTML = '<textarea readonly id="output__caixaTexto__texto">' + cripto + '</textarea>' + '<button class = "acao__botao__copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function decodificar(){
    var texto = textInput.value;

    var decod = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u")

    document.getElementById('output').innerHTML = '<textarea readonly id="output__caixaTexto__texto">' + decod + '</textarea>' + '<button class = "acao__botao__copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar(){
    var textoCop = document.getElementById('output__caixaTexto__texto');

    textoCop.select();
    document.execCommand('copy');
    alert("Texto Copiado");
}