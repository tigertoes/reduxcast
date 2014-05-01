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

if(document.location.pathname.match(/^\/asset/)) {
  // Inject the sender script
  var script = document.createElement('script');
  script.src = chromecastSenderSrc;
  document.head.appendChild(script);

  // Inject playback button in
  var header = document.getElementsByTagName('h2')[0],
      headerTitle = header.innerText,
      imageSrc = '<img id="chromecast_button" src="' + 
                 chrome.extension.getURL("img/cast_off.png") + '"/>';
  header.innerHTML = headerTitle + imageSrc;

  // Inject our own JS
  var reduxcast = document.createElement('script');
  reduxcast.src = chrome.extension.getURL('src/reduxcast.js');
  document.head.appendChild(reduxcast);
}
