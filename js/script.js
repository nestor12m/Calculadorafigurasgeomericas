

function calcularPerimetro(){
  let numero1 = document.getElementById("input-cuadrado");
  resultado = Number(numero1.value)*4;
  let respuestaPerimetro =  document.getElementById("rta-cuadrado");
  respuestaPerimetro.innerHTML =`El perimetro del cuadrado es ${resultado} cm`;
}

function calcularAreaCuadrado(){
    let numero1 = document.getElementById("input-cuadrado");
    resultado = Number(numero1.value)*2;
    let respuestaPerimetro =  document.getElementById("rta-cuadrado");
    respuestaPerimetro.innerHTML =`El Area del cuadrado es ${resultado} cm2`;
  }

  function perimetroCirculo(){
     let entrada = document.getElementById("input-radio");
     resultado =  (2*3.1415) * Number(entrada.value);

     let respCirculo = document.getElementById("rta-circulo");
     respCirculo.innerHTML =`El perimetro del circulo es ${resultado} cm`;
  }