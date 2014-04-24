/**
 *                   __                           __
 *    ________  ____/ /_  ___  ___________ ______/ /_
 *   / ___/ _ \/ __  / / / / |/_/ ___/ __ `/ ___/ __/
 *  / /  /  __/ /_/ / /_/ />  </ /__/ /_/ (__  ) /_
 * /_/   \___/\__,_/\__,_/_/|_|\___/\__,_/____/\__/
 *
 */
'use strict';

var chromecastSenderSrc = 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js';

/**
 * A brief explanation of what is going on here:
 * Content script extensions in Chrome seggregate the scopes of extension
 * runtime and page runtime - which means we can't access global variables like
 * chrome.cast in the page from this end. To work around it, we have to inject
 * JS into the page's DOM and have it evaluated. Given we need to push quite a
 * bit in, the below method essentially is a here-doc, something Javascript is
 * as yet able to support.
 *
 * Shout out to Zv_oDD over at http://stackoverflow.com/a/14416259 for this.
 */
function chromeCastForte() {
/*LOL

  var attempts = 0,
      maxAttempts = 5;

  isAvailable();

  // Check the receiver code is loaded and ready
  function isAvailable(){ 
    if(attempts >= maxAttempts){
      console.error("Maximum attempts reached");
      return;
    }
    if(!chrome.cast || !chrome.cast.isAvailable){ 
      attempts++;
      setTimeout(isAvailable, 1000);
      return;
    }
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

var script = document.createElement('script');
script.src = chromecastSenderSrc;
document.head.appendChild(script);

var nasty = document.createElement('script');
nasty.setAttribute('type', 'text/javascript');
nasty.innerHTML = chromeCastForte();
document.head.appendChild(nasty);
