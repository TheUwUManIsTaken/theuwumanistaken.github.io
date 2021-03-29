//for iPhone
if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/iPod/i))) {
    document.location = "mobileredirect.html";
 }
 //for anything else
 if (screen.width <= 699) {
 document.location = "mobileredirect.html";
 }