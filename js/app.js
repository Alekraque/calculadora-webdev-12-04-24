var resultado = document.getElementById("resultado");

function soma() {
  //entrada
  var n1 = parseFloat(document.getElementById("numero1").value);
  var n2 = parseFloat(document.getElementById("numero2").value);

  //processamento
  var soma = n1 + n2;

  //saida
  console.log(soma);
  resultado.innerText = soma;

}

function sub() {
    //entrada
    var n1 = parseFloat(document.getElementById("numero1").value);
    var n2 = parseFloat(document.getElementById("numero2").value);
  
    //processamento
    var sub = n1 - n2;

    //saida
  console.log(sub);
  resultado.innerText = sub;
}

function div() {
    //entrada
    var n1 = parseFloat(document.getElementById("numero1").value);
    var n2 = parseFloat(document.getElementById("numero2").value);
    if(n2===0){
        resultado.innerText = "erro"
    }
    else{
        var div = n1 / n2;
        resultado.innerText = div;
    }
    
    //saida
  console.log(div);
  
}

function mult() {
    //entrada
    var n1 = parseFloat(document.getElementById("numero1").value);
    var n2 = parseFloat(document.getElementById("numero2").value);
  
    //processamento
    var mult = n1 * n2;

    //saida
  console.log(mult);
  resultado.innerText = mult;
}