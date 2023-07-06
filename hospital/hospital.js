 //LEER HOSPITAL

 $("#btnBuscar").click(function(){
     $("#tbody-hospital").html("");
    var nombrebuscar = $("#txtBuscar").val();
    var campoordenar = $("#cbocampo").val();
    var orden = $("#orden").val();
    
 //fetch('http://localhost/centroS1/hospitalbuscar.php?textobuscar='+ nombrebuscar)
 var ruta ="http://localhost/centroS1/hospitalbuscar.php";
 var formData = new FormData();
 formData.append("textobuscar",nombrebuscar);
 formData.append("campoorden", campoordenar);
 formData.append("orden", orden);

 fetch(ruta,{
   method: 'POST',
   body:formData
   })
 
 .then(function(response) {
   return response.json();
 })
 .then(function(datos) {
   console.log(datos);
  
   $(datos).each(function(index,value){
       
       var fila = "<tr>";
       fila += "<td>"+ value.hospital_cod + "</td>";
       fila += "<td>"+ value.nombre + "</td>";
       fila += "<td>"+ value.dirección + "</td>";
       fila += "<td>"+ value.pais + "</td>";
       fila += "<td>"+ value.celular + "</td>";
       fila += "</tr>";
   $("#tbody-hospital").append(fila);
   });
 });
 });