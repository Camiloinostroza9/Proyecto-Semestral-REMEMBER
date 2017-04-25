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
    $('#cam').bind('click', cam);
    $('#ver').bind('click', ver);
    $('#video').bind('click',video);
    $('#cerrar').bind('click',cerrar);
    $('#vervideo').bind('click',vervideo);
}, false);

function cam(){
    navigator.camera.getPicture(function(photo){
        myApp.prompt('Agregue una Descripción a la Imagen','REMEMBER', function (value) {
        $('#img_cam').attr('src',photo);
        myApp.popup('.popup-cam');
            });
    }, function(error){
        myApp.alert('Error al tomar la fotografía','REMEMBER')
    }, {
        quality:100,
        correctOrientation:true,
        saveToPhotoAlbum:true,
        cameraDirection: 1
    });
}

function ver(){
    window.location = "main2.html";
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
    myApp.prompt('Agregue una Descripción al video','REMEMBER', function (value) {});
}

function cerrar(){
    $$('.confirm-ok').on('click', function () {
    myApp.confirm('Está seguro de cerrar sesión','REMEMBER', function () {
       window.location = "index.html";
    });
         
});
    
}

function vervideo(){
    window.location = "mainvideo.html";
}