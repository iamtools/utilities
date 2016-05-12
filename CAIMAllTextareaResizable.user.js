// ==UserScript==
// @name            CAIMAllTextareaResizable
// @namespace       iamtools-utilities
// @author          Yong Li
// @description     Adjust all textarea fields on CA Identity Manager User Console to be resizable. Specially this allows javascript BLTH developers to enlarge those javascript textarea fields and get a better view during script development.
// @version         0.1
// @include         http://*/iam/im/*
// @downloadURL     http://aalab.ca.com/tools/CAIMAllTextareaResizable.user.js
// @run-at          document-end
// @grant           none
// ==/UserScript==
//
// To install, first you need install either Tampermonkey (Chrome externsion) or Greasemonkey (Firefox addon):
//    https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en
//    https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/
// Then, please visit the following link on the browser and click on "install"
//    http://aalab.ca.com/tools/CAIMAllTextareaResizable.user.js
//
var textareaList = document.getElementsByTagName("textarea");

for (var i = 0; i < textareaList.length; i++)
{
    textareaList[i].style.resize="both";
    textareaList[i].style.overflow = "auto";
}
