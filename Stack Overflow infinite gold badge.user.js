// ==UserScript==
// @name         Stack Overflow infinite gold badge
// @namespace    http://direct-shoot.com/
// @version      0.2
// @description  Change my 8 gold badges number to infinite sign
// @author       TGrif
// @match        https://stackoverflow.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let profil_link = document.getElementsByClassName('my-profile js-gps-track')[0];
    if (profil_link.href === 'https://stackoverflow.com/users/5156280/tgrif') {
      let gold = document.querySelector('[title="8 gold badges"]');
      let height = gold.querySelector('.badgecount');
      height.textContent = '∞';
    }
})();