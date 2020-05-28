var botaoAdicionar = document.querySelector("#buscar-paciente");
botaoAdicionar.addEventListener("click",function() {
    var xhr = new XMLHttpRequest();    
    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");
    xhr .addEventListener("load", function () {
        if(xhr.status == 200){
            var resposta = xhr.responseText;    
            var pacientes = JSON.parse(resposta);   
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            }); 

        }else{
            // abreModal();
        }
    });
    xhr.send();
})

// function abreModal() {
//     $("#myModal").modal({
//       show: true
//     });
//   }
  
//   setTimeout(abreModal, 1000);