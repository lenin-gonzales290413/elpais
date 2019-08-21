$('#bars_group').on('click',function(){
    $('#icon-bars-top').toggleClass('ocultar_icono');
    $('#x_bars').toggleClass('ocultar_icono'); 
//    $('#icon_bars_secound').toggleClass('ocultar_icono'); 
//    $('#x_secound').toggleClass('ocultar_icono'); 
});




$('#icon-bars-top').on('click',function(){
    $('.icon_search_top').addClass('ocultar_search');
    $('.date').addClass('desglozar_date');
    $('.contenedor').addClass('mostrar_menu');
    
    
    $('#icon_bars_secound').addClass('ocultar_icono'); 
    $('#x_secound').removeClass('ocultar_icono');  
    
   


});

$('#x_bars').on('click',function(){
    $('.icon_search_top').removeClass('ocultar_search');
    $('.date').removeClass('desglozar_date');
    $('.contenedor').removeClass('mostrar_menu');
    
    $('#icon_bars_secound').removeClass('ocultar_icono'); 
    $('#x_secound').addClass('ocultar_icono'); 
        $('.contenedor').removeClass('mostrar_menu_secound');

    
});


$('#icon-bars-top').on('click',function(){
    $('.icon_search_top').addClass('ocultar_search');
    $('.date').addClass('desglozar_date');
    $('.contenedor').addClass('mostrar_menu');
    $('.form_search_header').removeClass('mostrar_search_top');
    $('.x_search').addClass('ocultar_icono');
    $('.icon_search_top').removeClass('ocultar_icono');
    
});


$('.submenu').on('click',function(){
    $('.sub_group').slideToggle("slow");
});

$('.search_group').on('click',function(){
    $('.icon_search_top').toggleClass('ocultar_icono');
    $('.x_search').toggleClass('ocultar_icono'); 
    $('.form_search_header').toggleClass('mostrar_search_top');
});


$('#bars_group_secound').on('click',function(){
    $('#icon_bars_secound').toggleClass('ocultar_icono');
    $('#x_secound').toggleClass('ocultar_icono');
    $('#tercer_menuss').removeClass('mostrar_tercer_menu');

});

$('#icon_bars_secound').on('click',function(){
    $('.contenedor').addClass('mostrar_menu_secound');
    
     $('#icon-bars-top').addClass('ocultar_icono'); 
    $('#x_bars').removeClass('ocultar_icono'); 
    
     $('#icon_bars_tercero').removeClass('ocultar_icono'); 
    $('#x_tercero').addClass('ocultar_icono'); 
    
}); 



$('#x_secound').on('click',function(){
    $('.contenedor').removeClass('mostrar_menu_secound');
     $('#icon-bars-top').removeClass('ocultar_icono'); 
    $('#x_bars').addClass('ocultar_icono'); 
    
        $('.contenedor').removeClass('mostrar_menu');

    
});


$('.top_icon').on('click',function(){
    $('html, body').animate({scrollTop:0}, 'slow');
		return false;
});
$('#categoria').on('click',function(){
   event.preventDefault();

});



$(document).ready(function(){
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > 160 ){
			$('.secound_menu').addClass('fixed');
			$('.contenedor').addClass('fixed_menu');
//            $('#tercer_menuss').addClass('ocultar_negro');

		} else {
			$('.secound_menu').removeClass('fixed');
			$('.contenedor').removeClass('fixed_menu');

		}
        
        
        if ( $(window).scrollTop() <= 10){
            $('.contenedor').addClass('fixed_secound_menu');
            $('#tercer_menuss').removeClass('mostrar_tercer_menu');
//            $('#tercer_menuss').removeClass('ocultar_negro');
            $('#icon_bars_tercero').removeClass('ocultar_icono');
            $('#x_tercero').addClass('ocultar_icono'); 
		} else {
                $('.contenedor').removeClass('fixed_secound_menu');

		}
        
        
        
	});
    
    
    
}); 




$('#bars_group_tercero').on('click',function(){
    $('#icon_bars_tercero').toggleClass('ocultar_icono');
    $('#x_tercero').toggleClass('ocultar_icono'); 

});

$('#icon_bars_tercero').on('click',function(){
    $('#tercer_menuss').addClass('mostrar_tercer_menu');
    
     $('.contenedor').removeClass('mostrar_menu_secound');
//    
     $('#icon_bars_secound').removeClass('ocultar_icono'); 
    $('#x_secound').addClass('ocultar_icono'); 

});

$('#x_tercero').on('click',function(){
    $('#tercer_menuss').removeClass('mostrar_tercer_menu');


});

//
//$('#x_tercero').on('click',function(){
//   $('#tercer_menuss').removeClass('mostrar_tercer_menu');
//    
//
//});















