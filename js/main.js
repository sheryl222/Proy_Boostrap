/*
$(document).ready(function(){

})
*/
$(function(){
    // $ es el selector

    $("#noticias article").prepend("<p>Lea</p>");
    //Con prepend se agrega contenido al inicio del objeto seleccionado

    $("#eventos article").append("<p>No se lo pierda!</p>");
    //Con append se agrega contenido al final del objeto seleccionado

    $("#titulo-noticias").mouseenter(function(){
        $("#noticias").css("background-color","#ffcc00")
                      .css("color","#ffffff")
                      .css("font-style","italic");
    });
    $("#titulo-noticias").mouseleave(function(){
        $("#noticias").css("background-color","#ffffff")
                      .css("color","#333333")
                      .css("font-style","normal");
    });
    $("#titulo-noticias").click(function(){
        //$("#titulo-noticias").text("novedades");
        //Con text se cambia el contenido de texto del objeto seleccionado
        //$(this).text("novedades");
        //donde this hace referencia al objeto que recibe el evento
        $(this).html("<strong>nove</strong>dades");
        //Con html Se cambia el contenido html del objeto
        $(".padded").css("padding-top","200px");
    })

    //Galeria

    $("#galeria figure").append("<figcaption>")
    $("#galeria figure figcaption").html("<i class='fas fa-search-plus'></i>");    
    $("#galeria figure").each(function(){
        var nombres = $(this).find("img").attr("title");
        $(this).find("figcaption").append("<h6>" + nombres + "</h6>");
        // con find se busca y selecciona un objeto dentro del previamente seleccionado
    })

    $("#galeria figure").mouseenter(function(){
        // show fadeIn SlideDown
        $(this).find("figcaption").stop().slideDown("slow",function(){
            $(this).css("display","flex");
            $(this).find("h6").fadeIn("fast");
            $(this).find("i").fadeIn("fast");
        });
    })
    $("#galeria figure").mouseleave(function(){
        // hide fadeOut slideUp
        $(this).find("figcaption").stop().slideUp("slow");
    })
    //Con stop() se detiene la animación previa
    
    $("#galeria figure figcaption i").click(function(){
        $("body").append("<div id='fondo-oscuro'>")
        var rutaImagen = $(this).parent().parent().find("img").attr("src")
        $("#fondo-oscuro").append("<img src='" + rutaImagen +  "'>")

        var nombrePersona = $(this).parent().parent().find("img").attr("title")
        $("#fondo-oscuro").append("<h5>" + nombrePersona +  "</h5>")

        $("#fondo-oscuro").click(function(){
            $(this).remove();//elimina el objeto de la web
        })
    })

    //Crear opciones de menú
    $("section").each(function(){
        var tituloseccion = $(this).find("h2").html();
        console.log(tituloseccion);

        var id = $(this).attr("id");
        console.log(id);
        $("#menu-main").append('<li class="nav-item"><a class="nav-link" href="#' + 
            id + '">' + tituloseccion + '</a></li>');
    });

})
        
        //PROGRAMANDO MENUS
        $("#menu-item-hospital").click(function(){
            console.log("hospital");
            fetch('hospital/hospital.html')
            .then(function(response) {
                return response.text();
            })
            .then(function(datos) {
                //console.log(datos);
                $("#main-content").html(datos);
            });
        }); 
    
        $("#menu-item-pacientes").click(function(){
            console.log("pacientes");
            fetch('pacientes/pacientes.html')
            .then(function(response) {
                return response.text();
            })
            .then(function(datos) {
                //console.log(datos);
                $("#main-content").html(datos);
            });
        });

    $("#menu-item-tabla-pacientes").click(function(){
        fetch('tabla-pacientes/tabla-pacientes.html')
        .then(function(response) {
            return response.text();
        })
        .then(function(datos) {
            $("#main-content").html(datos);
        });
    });

