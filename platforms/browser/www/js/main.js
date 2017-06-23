

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
    $('#name').html('<b>' + localStorage.getItem('nombre') + '</b>');
    $('#mail').html('<b>' + localStorage.getItem('mail') + '</b>');
    $('#cam').bind('click', capturarFoto);
    $('#video').bind('click', capturarVideo);
    $('#sacarFoto').bind('click', tomarFoto);
    $('#subir').bind('click', subirFoto);
    $('#grabarVideo').bind('click',video);
     $('#subVideo').bind('click',subirVideo);
    $('#cerrar').bind('click',cerrar);
    $('#volver').bind('click',volveratras);
   
}, false);


function capturarFoto(){
    window.location = "foto.html";
    
}

function capturarVideo(){
   window.location = "video.html"; 
}



function ver(){
    window.location = "verfoto.html";
}

function video(){
    
    var videoGrabado = function(mediaFiles){
        var i,path,len;
        for(i=0,len = mediaFiles.length;i<len;i += 1){
            path = mediaFiles[i].fullPath;   
        }
        
    } ;
    
    
    var videoError = function(error){
        myApp.alert('Error al grabar el video','REMEMBER')
    };
    
    navigator.device.capture.captureVideo(videoGrabado,videoError, { duration:15});
    //myApp.prompt('Agregue una Descripción al video','REMEMBER', function (value) {});
}

function subirVideo() {
    if($('#videolocal').attr('src') != ''){
        var imageURI = $('#videolocal').attr('src');
        var options = new FileUploadOptions();
        options.fileKey="video";
        options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
        
        var params = new Object();
        params.descripcion = document.getElementById("descripcion").value;
        options.params = params;
        options.chunkedMode = false;
        
        myApp.showPreloader('Subiendo...');
        
        var ft = new FileTransfer();
        ft.upload(imageURI, "http://colvin.chillan.ubiobio.cl:8070/jdoming/uploadVideo.php", win2, fail2, options);
        localStorage.setItem('ruta', imageURI.substr(imageURI.lastIndexOf('/') + 1));
        localStorage.setItem('descripcion',params.descripcion);
    }else{
        myApp.alert('No hay video para subir','REMEMBER');
    }
}


function win2(r) {
    console.log(r.response);
    myApp.hidePreloader();
    myApp.alert('Imagen Subida exitosamente:'+ r.response,'REMEMBER');
    guardarVideo();
    
    
}

function fail2(error) {
    myApp.hidePreloader();
    myApp.alert('Error al subir la imagen','REMEMBER');
}

function error2(){
    console.log("ERROR");
}

function guardarVideo(){
     var descripcion = localStorage.getItem('descripcion');
    var Email = localStorage.getItem('Email');
    var ruta = "http://colvin.chillan.ubiobio.cl:8070/jdoming/videos/"+localStorage.getItem('ruta');
      $.ajax({
          dataType: 'json',
          type: 'POST',
          data: {
              descripcion: descripcion,
              Email: Email,
              ruta:ruta
          },
          url: 'http://colvin.chillan.ubiobio.cl:8070/jdoming/guardar.php'
        
      });
}



function cerrar(){
    $('.confirm-ok').on('click', function () {
    myApp.confirm('Está seguro de cerrar sesión','REMEMBER', function () {
       window.location = "index.html";
    });
         
});
    
}

function volveratras(){
      $('.confirm-ok').on('click', function () {
    myApp.confirm('Está seguro regresar al menú principal','REMEMBER', function () {
       window.location = "main.html";
    });
         
});
}

function vervideo(){
    window.location = "mainvideo.html";
}




function tomarFoto() {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(function(imageURI){
            $('#fotolocal').attr('src',imageURI);
        }, function(message) {
            myApp.alert('Error al tomar la fotografía','REMEMBER');
        },{
            quality: 40,
            destinationType: navigator.camera.DestinationType.FILE_URI,
            sourceType: navigator.camera.PictureSourceType.CAMERA
        }
    );

}



function subirFoto() {
    if($('#fotolocal').attr('src') != ''){
        var imageURI = $('#fotolocal').attr('src');
        var options = new FileUploadOptions();
        options.fileKey="imagen";
        options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
        options.mimeType="image/jpeg";
        var params = new Object();
        params.descripcion = document.getElementById("descripcion").value;
        options.params = params;
        options.chunkedMode = false;
        
        myApp.showPreloader('Subiendo...');
        
        var ft = new FileTransfer();
        ft.upload(imageURI, "http://colvin.chillan.ubiobio.cl:8070/jdoming/uploadimagen.php", win, fail, options);
        localStorage.setItem('ruta', imageURI.substr(imageURI.lastIndexOf('/') + 1));
        localStorage.setItem('descripcion',params.descripcion);
    }else{
        myApp.alert('No hay foto para subir','REMEMBER');
    }
}

function win(r) {
    console.log(r.response);
    myApp.hidePreloader();
    myApp.alert('Imagen Subida exitosamente: ','REMEMBER');
    guardarFoto();
    
    
}

function fail(error) {
    myApp.hidePreloader();
    myApp.alert('Error al subir la imagen','REMEMBER');
}

function error(){
    console.log("ERROR");
}

function guardarFoto(){
    var descripcion = localStorage.getItem('descripcion');
    var Email = localStorage.getItem('Email');
    var ruta = "http://colvin.chillan.ubiobio.cl:8070/jdoming/fotos/"+localStorage.getItem('ruta');
      $.ajax({
          dataType: 'json',
          type: 'POST',
          data: {
              descripcion: descripcion,
              Email: Email,
              ruta:ruta
          },
          url: 'http://colvin.chillan.ubiobio.cl:8070/jdoming/guardarFoto.php'
        
      });
}



