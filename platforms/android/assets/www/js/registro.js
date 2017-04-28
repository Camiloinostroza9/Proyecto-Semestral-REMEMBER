// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

document.addEventListener('deviceready', function(){
    $("#volver").bind('click', volver);
    $("#reg").bind('click', exito);
    
}, false);



function volver(){
    window.location = "index.html";
}

function exito(){
    
    var nombre = $('#nombre').val();
    var apellido = $('#apellido').val();
    var email = $('#email').val();
    var clave = $('#clave').val();
    
    if(nombre.length > 0 && apellido.length > 0 && email.length > 0 && clave.length > 0){
       $.ajax({
          dataType: 'json',
          type: 'POST',
          data: {
              Nombre: nombre,
              Apellido: apellido,
              Email: email,
              Clave: clave
          },
          url: 'http://146.83.196.204:8070/jdoming/insercion.php',
          
          error: function (resultado) {
              if(resultado == 1){
                  myApp.Alert("Te has registrado exitosamente");
              }else{
                  myApp.Alert("Error");
              }
          }
      });
        
    }else{
      myApp.alert('Debe Ingresar los datos solicitados','REMEMBER');
    }
}
    
