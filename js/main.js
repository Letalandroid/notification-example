var title = "Facebook";
var cantNoti = 0;

var sound = new Audio("src/notification-sound.mp3");

function notification() {

    cantNoti++;

    if (cantNoti > 99) {
        
        cantNoti = "+99";

        var mensaje = "(" + cantNoti + ") " + title;

        document.getElementById("title").innerHTML = mensaje;

        sound.play();

    }

    else {

        mensaje = "(" + cantNoti + ") " + title;

        document.getElementById("title").innerHTML = mensaje;

        sound.play();

    }
    
    console.log("Tienes una nueva notificación.");
    console.log("Notificaciones actuales: " + cantNoti);

}