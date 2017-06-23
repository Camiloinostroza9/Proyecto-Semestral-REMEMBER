var myApp = new Framework7(); 
 
var $$ = Dom7;
 
var mainView = myApp.addView('.view-main', {
  dynamicNavbar: true
});

var BrowserVideo = myApp.photoBrowser({
    photos : [
        
        {
            url: 'http://lorempixel.com/1024/1024/sports/2/',
            caption: 'Second Caption Text'
        },
        {
            url: 'http://lorempixel.com/1024/1024/sports/3/',
        },
    ],
    theme: 'dark',
    type: 'standalone'
});
$$('#vervideo').on('click', function () {
    BrowserVideo.open();
});

