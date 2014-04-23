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

  isAvailable();

  // Check the receiver code is loaded and ready
  function isAvailable(){ 
    if(attempts >= max_attempts){
      console.error("Maximum attempts reached");
      return;
    }
    if(!chrome.cast || !chrome.cast.isAvailable){ 
      attempts++;
      setTimeout(isAvailable, 1000);
      return;
    }
    console.info("YABBA DABBA DOO~");
    setupChromeCast();
  }

  function sessionListener(e) {

  }

  function receiverListener(e) {

  }

  function onInitSuccess(){

  }

  function onError(){

  }

  function setupChromeCast(){
    var sessionRequest = new chrome.cast.SessionRequest(chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID);
    var apiConfig = new chrome.cast.ApiConfig(sessionRequest, sessionListener, receiverListener);
    chrome.cast.initialize(apiConfig, onInitSuccess, onError);
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
