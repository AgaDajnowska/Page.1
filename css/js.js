'use strict';

window.onscroll = function (){
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop >= 100) {
        document.getElementsByClassName("page_header").style.height = "60px";
        document.getElementsByClassName("page_header").style.backgroundColor = "#FDFDFD";
        document.getElementsByClassName("page_header").style.boxShadow = "0 0 30px 3px rgba(0,0,0,0.6)";
    }
    else
}
