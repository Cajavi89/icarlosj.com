import {hamburgerMenu} from "./src/scripts/BtnHamburguesa.js";
import BtnScrollTop from "./src/scripts/BtnScrollTop.js";
import HeaderScrolling from "./src/scripts/HeaderScrolling.js";




document.addEventListener("DOMContentLoaded" || "click", (e)=>{

  hamburgerMenu(".panel-btn",".panel-menu", ".menu a");
  BtnScrollTop(".btn-scroll-top");
  HeaderScrolling();
})