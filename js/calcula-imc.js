var titulo = document.querySelector(".titulo");
titulo.textContent = "Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var peso = pacientes[i].querySelector(".info-peso").textContent;
    var altura = pacientes[i].querySelector(".info-altura").textContent;
    
    var tdImc = pacientes[i].querySelector(".info-imc")
    
    var pesoValido = true;
    var alturaValido = true;
    
    if(peso <= 0 || peso >= 1000){
        pesoValido = false;
        pacientes[i].classList.add("paciente-invalido");
        tdImc.textContent = "Peso Inválido";
        
    }
    if(altura < 0 || altura >= 3){
        alturaValido = false
        tdImc.textContent = "Altura Inválido";
        pacientes[i].classList.add("paciente-invalido");
    }
    
    if(pesoValido && alturaValido){
      var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }

}

function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

