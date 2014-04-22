'use strict';

var chromecast_app_id     = '',
    chromecast_sender_src = 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js';

var script    = document.createElement('script');
script.src    = chromecast_sender_src;
document.head.appendChild(script);

/*
 * Shout out to Zv_oDD over at http://stackoverflow.com/a/14416259 for this.
 */

function chromeCastForte() {
/*LOL

  var attempts = 0,
      max_attempts = 5;
  setTimeout(isAvailable, 1000);
  function isAvailable(){ 
    console.info("Attempt: " + attempts); 
    if(attempts >= max_attempts){
      return;
    } 
    if(!chrome.cast || !chrome.cast.isAvailable){ 
      setTimeout(isAvailable, 1000); return; 
    } 
    console.log(chrome);
  }

LOL*/
  var here = "LOL";
  var reobj = new RegExp("/\\*"+here+"\\n[\\s\\S]*?\\n"+here+"\\*/", "m");
  var str = reobj.exec(chromeCastForte).toString();
  str = str.replace(new RegExp("/\\*"+here+"\\n",'m'),'').toString();
  return str.replace(new RegExp("\\n"+here+"\\*/",'m'),'').toString();
}

var nasty = document.createElement('script');
nasty.setAttribute('type', 'text/javascript');
nasty.innerHTML =  chromeCastForte();
document.head.appendChild(nasty);
