// ==UserScript==
// @name         Stack Overflow infinite gold badge
// @namespace    http://direct-shoot.com/
// @version      0.∞
// @description  Change my 8 gold badges number to infinite sign
// @author       TGrif
// @match        https://stackoverflow.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var badges = document.getElementsByClassName('v-visible-sr');
    var gold_badge = document.querySelector('[title="8 gold badges"]');
    gold_badge.innerText = "∞ gold badges";
    gold_badge.innerHTML = '<span class="badge1">●</span><span class="badgecount">∞</span>';
    gold_badge.title = "∞ gold badges";
})();
