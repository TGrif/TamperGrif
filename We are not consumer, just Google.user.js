// ==UserScript==
// @name         We are not consumer, just Google
// @namespace    http://direct-shoot.com/
// @version      0.1
// @description  We are not consumers but users, update link on Google search footer
// @author       TGrif
// @match        https://www.google.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let elems = document.querySelectorAll("*"),
    res_fr = Array.from(elems).find(v => v.textContent === 'Info consommateurs'),
    res_en = Array.from(elems).find(v => v.textContent === 'Consumer Information');
    if (res_fr) res_fr.innerText = 'Info utilisateurs';
    if (res_en) res_en.innerText = 'User Information';
})();