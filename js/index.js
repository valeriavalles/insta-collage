
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
 }
 
 function allowDrop(ev) {
   ev.preventDefault();
 }
 
 function drop(ev) {
   ev.preventDefault();
   var data = ev.dataTransfer.getData("text");
   ev.target.appendChild(document.getElementById(data));
 }




//guardar_localstorage();
/*let $find = $('#find');

$find.on('click', function(){
alert('hola');
});

function obtenerLocalstorage(){
    let nombre = localStorage.getItem('nombre');
    console.log(nombre);
}
obtenerLocalstorage();

function guardar_localstorage(){
    let persona = {
        nombre:'fernando',
        edad:31,
        correo:'xyz@gmail.com',
        coords: {
            lat:10,
            lng:-10,
        }
    };
    let nombre = 'juan';

    localStorage.setItem('nombre', nombre);

}*/



/*$(document).ready(function(){
    $.fn.pluss = function() {
      
        this.each(function(){
            $(this).on('mouseover', function(){
                var images = $('img');*/
        /* for (var i = 0;i < images.length;i++) {*/
        /* $('.container').append(
          '<figure>' +
         '<img src='+$(this).attr('src') +' width="200px"> </img>'+
         '<figcaption>'+$(this).attr('alt') +'</figcaption>' +
         '</figure>'
         );
       
            });
        
            $(this).on('mouseover', function(){*/
               // var images = $('img');
        /* for (var i = 0;i < images.length;i++) {*/
           /* var newImg = "assets/img/splash.png"
            $(this).attr('src',newImg)*/
          /*  $(this).hide()
       
            });
        });
    }  
});*/
    

    
