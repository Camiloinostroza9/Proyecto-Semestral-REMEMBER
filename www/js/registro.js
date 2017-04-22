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
    window.location = "registroexitoso.html";
}