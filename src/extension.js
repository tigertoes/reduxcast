/**
 *
 *     -:::::::::::::::::::::::::::::::::::::::::::::::::
 *     oo----------------------------------------------+o`
 *     oo               _                         _    /o`
 *     oo  _ __ ___  __| |_   ___  _____ __ _ ___| |_  /o`
 *     oo | '__/ _ \/ _` | | | \ \/ / __/ _` / __| __| /o`
 *     oo | | |  __/ (_| | |_| |>  < (_| (_| \__ \ |_  /o`
 *     oo |_|  \___|\__,_|\__,_/_/\_\___\__,_|___/\__| /o`
 *     --                                              /o`
 *                                                     /o`
 * -oo+/:-.                                            /o`
 * ./+oooooo/-`                                        /o`
 *      .-/oooo/.                                      /o`
 * .:-.     -+ooo+.                                    /o`
 * :oooo+:`   .+ooo:                                   /o`
 * `.-/oooo/.   -ooo/                                  /o`
 *      .+ooo:   .ooo/    `````````````````````````````/o`
 * -+:`   -ooo/   .ooo-   /++++++++++++++++++++++++++++++
 * :ooo/   .ooo:   /ooo
 * .::::.   -::-   .:::`
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
