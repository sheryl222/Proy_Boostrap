
var filaSeleccionada;
//fetch('https://coronavirusproc.000webhostapp.com/pacientes.php')
 fetch('http://localhost/centroS1/pacientes.php')
  .then(function (response) {
    return response.json();
  })
  .then(function (datos) {
    console.log(datos);
    $(datos).each(function (index, value) {
      var fila = "<tr>";
      fila += "<td>" + value.idNumeroSeguro + "</td>";
      fila += "<td>" + value.nombre +'  '+ value.apellido+ "</td>";
      fila += "<td>" + value.dni + "</td>";
      fila += "</tr>";
      $("#tbody-tabla-pacientes").append(fila);
    });
    aplicarEventos();
  });

$("#btn-guardar").click(function () {
  var nombre = $("#txtNombre").val();
  var dni = $("#txtDni").val();
  //var ruta ="https://coronavirusproc.000webhostapp.com/pacientes-insertar.php";
  var ruta ="http://localhost/centroS1/pacientes-insertar.php";
  var formData = new FormData();
  formData.append("nombre", nombre);
  formData.append("dni", dni);

  fetch(ruta, {
    method: "POST",
    body: formData,
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (datos) {
      console.log(datos);
      var fila = "<tr>";
      fila += "<td>" + datos + "</td>";
      fila += "<td>" + nombre + "</td>";
      fila += "<td>" + dni + "</td>";
      fila += "</tr>";
      $("#tbody-tabla-pacientes").append(fila);
      $("#btn-close").click();
      aplicarEventos();
    });
});

function aplicarEventos() {
  $("#tbody-tabla-pacientes tr").mouseenter(function () {
    var filaActual = $(this);
    var idNumeroSeguro = $(this).find("td:nth-child(1)").text();
    var nombre = $(this).find("td:nth-child(2)").text();
    var dni = $(this).find("td:nth-child(3)").text();

    $(this)
      .find("td:last-child")
      .append(
        "<div class='controles-edicion'>" +
          "<i class='fas fa-pen icono-editar'></i>" +
          "<i class='fas fa-times icono-eliminar'></i></div>"
      );
    $(".icono-editar").click(function () {
      filaSeleccionada = filaActual;
      $("#formulario-editar").slideDown("slow");
      $("#txtidPacienteEditar").val(idNumeroSeguro);
      $("#txtNombreEditar").val(nombre);
      $("#txtDniEditar").val(dni);
    });
    $(".icono-eliminar").click(function () {
      var respuesta = confirm(
        "¿Esta seguro que quiere eliminar este paciente? " + nombre
      );
      console.log(respuesta);
      if (respuesta == true) {
        eliminarCategoria(idNumeroSeguro);
        filaActual.remove();
      }
    });
  });
  $("#tbody-tabla-pacientes tr").mouseleave(function () {
    $(this).find("td:last-child").find("div").remove();
  });
}

$("#btnCerrar").click(function () {
  $("#formulario-editar").slideUp("slow");
});

$("#btnActualizar").click(function () {
  $("#formulario-editar").slideUp("slow");
});

$("#btnActualizar").click(function () {
  var idNumeroSeguro = $("#txtidPacienteEditar").val();
  var nombre = $("#txtNombreEditar").val();
  var dni = $("#txtDniEditar").val();
  var ruta ="http://localhost/centroS1/pacientes-actualizar.php";
  //var ruta ="https://coronavirusproc.000webhostapp.com/pacientes-actualizar.php";
  var formData = new FormData();
  formData.append("idNumeroSeguro", idNumeroSeguro);
  formData.append("nombre", nombre);
  formData.append("dni", dni);

  fetch(ruta, {
    method: "POST",
    body: formData,
  })
    .then(function (response) {
      return null;
    })
    .then(function (datos) {
      filaSeleccionada.find("td:nth-child(1)").text(idNumeroSeguro);
      filaSeleccionada.find("td:nth-child(2)").text(nombre);
      filaSeleccionada.find("td:nth-child(3)").text(dni);
    });
  $("#formulario-editar").slideUp("slow");
});

function eliminarCategoria(idNumeroSeguro) {
  var ruta ="http://localhost/centroS1/pacientes-eliminar.php";
 // var ruta ="https://coronavirusproc.000webhostapp.com/pacientes-eliminar.php";
  var formData = new FormData();
  formData.append("idNumeroSeguro", idNumeroSeguro);

  fetch(ruta, {
    method: "POST",
    body: formData,
  }).then(function (response) {
    return null;
  });
}
