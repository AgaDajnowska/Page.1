'use strict';

window.onscroll = function() {scrollFunction()};
const logo = document.getElementById("logo");
const header = document.getElementById("page_header");

function scrollFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    document.getElementById("page_header").style.height = "60px";
    document.getElementById("page_header").style.background = "#FDFDFD";
    document.getElementById("page_header").style.boxShadow = "0 0 30px 3px rgba(0,0,0,0.6)";
    document.getElementById("logo").style.height = "50px";
    document.querySelector("span").style.color = "#3a3a3a";
   /* logo.classList.add("scrolled"); */
  } else {
    document.getElementById("page_header").style.height = "100px";
    document.getElementById("page_header").style.background = "rgb(30, 30, 30)";
    document.getElementById("page_header").style.boxShadow = "0 0 15px 2px rgba(0,0,0,0.5)";
    document.getElementById("logo").style.height = "90px";
    document.querySelector("span").style.color = "#fafbfb";
    /* logo.classList.remove("scrolled"); */
  }
}

const nav = document.querySelector(".page_nav_dropdown");
const navButton = document.getElementById("menu_btn");

function showOrHideMenu(navButton, checked) {
  if (checked) {
    nav.classList.add("dropped");
  } else {
    nav.classList.remove("dropped");
  }
}

const targetDivMess = document.querySelector(".contact_message");
const targetDivPhone = document.querySelector(".contact_phone");
const btnMess = document.querySelector(".contact_us_click");
const btnPhone = document.querySelector(".contact_us_phone");

btnMess.addEventListener("click", showOrHideMess);
btnPhone.addEventListener("click", showOrHidePhone);

function showOrHidePhone() {
  if (targetDivMess.style.display !== "none") {
    targetDivMess.style.display = "none";
    targetDivPhone.style.display = "block";
  }
}

function showOrHideMess() {
  if (targetDivPhone.style.display !== "none") {
    targetDivPhone.style.display = "none";
    targetDivMess.style.display = "block";
  }
}

function validate(form) {
  const errorMessages =[];

  if (!form.elements.email.value.includes("@")) {
    errorMessages.push("Email musi zawierać znak @");
  }

  if (!form.elements.name.value.trim().length <= 2) {
    errorMessages.push("Trzeba wpisać więcej niż 2 znaki");
  }

  if (!form.elements.prefix.checked){
    errorMessages.push("Musisz wybrać formę");
  }

  if (!form.elements.textarea.value.trim().length <= 2) {
    errorMessages.push("Trzeba wpisać więcej niż 2 znaki");
  }

  if (!form.elements.agreement.checked){
    errorMessages.push("Musisz zaakceptować warunki");
  }

  return errorMessages
}

function hideMessages() {
  errorMessageElement.textContent = "";
  errorMessageElement.classList.add("none_mess");
  successMessageElement.textContent = "";
  successMessageElement.classList.add("none_mess");
}

function renderErrorMessage(errorMessages) {
  console.log("errorMessages", errorMessages);
  errorMessageElement.textContent = errorMessages.join(" ");

  errorMessageElement.classList.remove("none_mess");
}

function renderSuccessMessage(successMessages) {
  console.log("Sukces");
  successMessageElement.textContent = "Formularz wysłany";

  successMessageElement.classList.remove("none_mess");
}

function handleSubmit(event) {
  event.preventDefault();

  const errorMessages = validate(this);

  hideMessages();

  if (errorMessages.length > 0) {
    renderErrorMessage(errorMessages);
  } else {
    renderSuccessMessage();
  }
}

const form = document.getElementById("form");
const errorMessageElement = document.querySelector("#error_mess");
const successMessageElement = document.querySelector("#success_mess");

form.addEventListener("submit",handleSubmit);


const menu = document.querySelector('.hamburger');

menu.addEventListener('click', () => {
  menu.classList.toggle('hamburger_active');
});