// ==UserScript==
// @name            CAIMAllTextareaResizable
// @namespace       iamtools-utilities
// @author          Yong Li
// @description     Force all textarea fields on CA Identity Manager User Console to be resizable. Specially it's for BLTH java script developers to enlarge the javascript textarea fields during script development.
// @version         0.1
// @include         http://*/iam/im/*
// @downloadURL     https://raw.githubusercontent.com/iamtools/utilities/master/CAIMAllTextareaResizable.user.js
// @run-at          document-end
// @grant           none
// ==/UserScript==
//
// Note:
//
// This script only takes effect when the URL of CA IM User Console contains /iam/im/
//
// Installation:
//
// To install, first you need install either Tampermonkey (Chrome externsion) or Greasemonkey (Firefox addon):
//    https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en
//    https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/
// Then, please visit the following link on the browser and click on "install"
//    https://raw.githubusercontent.com/iamtools/utilities/master/CAIMAllTextareaResizable.user.js
//

var textareaList = document.getElementsByTagName("textarea");

for (var i = 0; i < textareaList.length; i++)
{
    textareaList[i].style.resize="both";
    textareaList[i].style.overflow = "auto";
}
