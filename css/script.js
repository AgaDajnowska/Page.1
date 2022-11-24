'use strict';

window.onscroll = function (){
    scrollFunction()
};

function scrollFunction() {
    const page_header = document.getElementsByClassName("page_header");

    if (document.documentElement.scrollTop > 100) {
        page_header.classList.add("page_header_fixed");
    } else {
        page_header.classList.remove("page_header_fixed");
    }
}