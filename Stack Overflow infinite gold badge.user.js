// ==UserScript==
// @name         Stack Overflow infinite gold badge
// @namespace    http://direct-shoot.com/
// @version      0.6
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
      gold.title = '∞ gold badges';
      let gold_badge = document.getElementsByClassName('s-badge__gold')[0];
      let height_gold = gold_badge.querySelector('.flex__center');
      height_gold.innerHTML = '∞';
      gold_badge.title = gold.title;
      let account_badges_gold = document.getElementsByClassName('badges')[0];
      let account_gold = account_badges_gold.querySelector('.badgecount');
      account_gold.innerHTML = '∞';
      account_gold.title = gold_badge.title;
    }
})();
