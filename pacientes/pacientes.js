//LEER PACIENTES
fetch('http://localhost/centroS1/pacientes.php')
.then(function(response) {
    return response.json();
  })
 .then(function(datos) {
    console.log(datos);
    $(datos).each(function(index,value){
     console.log(value.dni)
        var card =  '<div class="col mb-4"><div class="card-shadow">';
            card +='<div class="card-header"> '+ value.idNumeroSeguro + '</div>';
            
            card += '<h5 class="card-title">' + value.nombre + ' ' + value.apellido +  '</h5>';
            card += '<p class="card-text">' + value.dni + '</p>';
            card += '<p class="card-text">' + value.nacimiento + '</p>';
            card += '<p class="card-text">' + value.pais + '</p>';
            card += '</div></div></div>';
        
            $("#card-pacientes").append(card);
            


        });
   });
   
