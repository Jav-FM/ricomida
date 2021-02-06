$(function (){
    $('.carousel').carousel({
        interval: 2000
    });

    $('[data-toggle="tooltip"]').tooltip();

    $("#enviarCorreo").click(function(event){
        alert('El correo fue enviado correctamente...');
    });
    
    $("#IngredientesyPreparacion h5").on("dblclick",function(){
        $(this).css("color","red");
    });

    $(".card-title").click(function(event){
        $(".card-text").toggle();
    });
    
})