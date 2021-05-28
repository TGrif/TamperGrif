// ==UserScript==
// @name         We don't want products, just SO
// @namespace    http://direct-shoot.com/
// @version      0.1
// @description  Hide Products link on Stack Overflow header
// @author       TGrif
// @match        https://stackoverflow.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let product_header_link = document.getElementsByClassName('-marketing-link js-gps-track js-products-menu')[0];
    product_header_link.style.visibility = 'hidden';
})();