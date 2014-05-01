'use strict';

var attempts    = 0,
    maxAttempts = 30,
    delay       = 1000,
    isReady     = false,
    media       = false,
    buttonId    = 'chromecast_button';

window.onLoad = isAvailable();
document.getElementById(buttonId).onclick = playVideo;

function isAvailable(){
  if(attempts >= maxAttempts){
    console.error("Maximum attempts reached");
    return;
  }
  if(!chrome.cast || !chrome.cast.isAvailable){
    attempts++;
    setTimeout(isAvailable, delay);
    return;
  }
  setupChromeCast();
}

function sessionListener(e) {
  console.info('Session Listener initialised');
}

function receiverListener(e) {
  console.info('Receiver Listener initialised');
  if(e !== chrome.cast.ReceiverAvailability.AVAILABLE) return;
  isReady = true;
}

function onInitSuccess(e) {
  console.info('Chromecast initialised!');
}

function onError(e) {
  //TODO change/hide the icon?
}

function onMediaDiscovered(how, newMedia) {
  media = newMedia;
}

function setupChromeCast() {
  var sessionRequest = new chrome.cast.SessionRequest(chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID);
  var apiConfig = new chrome.cast.ApiConfig(sessionRequest,
    sessionListener,
    receiverListener);
  chrome.cast.initialize(apiConfig, onInitSuccess, onError);
}

function playVideo(){
  if(!isReady) return;
  var source = document.getElementsByTagName('source');
  if(source.length <=0) {
    console.error("Video can't be found, huh?");
    return;
  }
  var url = source[0].getAttribute("src");
  console.info("Sending " + url + " outbound!");
  chrome.cast.requestSession(function(session){
    var mediaInfo = new chrome.cast.media.MediaInfo(url);
    mediaInfo.contentType = 'video/mp4';
    var request = new chrome.cast.media.LoadRequest(mediaInfo);
    session.loadMedia(request,
    onMediaDiscovered.bind(this, 'loadMedia'),
    function(e){
      console.error("Unable to cast: " + e.code);
    }); //FIXME callback hell

  }, function(e) {
    console.error('Error: ' + e.code);
  });
}


