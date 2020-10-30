// ==UserScript==
// @name         Stack Overflow infinite gold badge
// @namespace    http://direct-shoot.com/
// @version      0.1
// @description  Change my 8 gold badges number to infinite sign
// @author       TGrif
// @match        https://stackoverflow.com/users/5156280/tgrif
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let gold = document.getElementsByClassName('s-badge__gold')[0];
    if (gold.textContent.includes('8')) gold.textContent = '∞';
})();