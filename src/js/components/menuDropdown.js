import {header, classes, menu} from "../_vars";
import {addInvertHeader, removeInvertHeader} from "../functions/invertHeader";

const handlerMenuBtn1 = () => {
  if (document.querySelector('.page__body').classList.contains('overflow')) {
    dropdownMenuClose(menu.menu, menu.menuContainer, classes);
  } else {
    menu.menuCompany.classList.add(classes.visuallyHidden);
    menu.mainMenu.classList.remove(classes.visuallyHidden);
    addInvertHeader(header, classes);
    dropdownMenuOpen(menu.menu, menu.menuContainer, classes);
    header.menuBtn.removeEventListener('click', handlerMenuBtn1);
    header.menuBtn.addEventListener('click', handlerMenuBtn2);
  }
}

const handlerMenuBtn2 = () => {
  dropdownMenuClose(menu.menu, menu.menuContainer, classes);
  if (window.innerWidth >= 1290 && document.querySelector('.page__body').classList.contains('main-page') && window.scrollY < 150) {
    removeInvertHeader(header, classes);
  }
  header.menuBtn.removeEventListener('click', handlerMenuBtn2);
  header.menuBtn.addEventListener('click', handlerMenuBtn1);
}

const handlerCompanyBtn = () => {
  if (document.querySelector('.page__body').classList.contains('overflow')) {
    dropdownMenuClose(menu.menu, menu.menuContainer, classes);
    if (window.innerWidth >= 1290 && document.querySelector('.page__body').classList.contains('main-page') && window.scrollY < 150) {
      removeInvertHeader(header, classes);
    }
  } else {
    menu.menuCompany.classList.remove(classes.visuallyHidden);
    menu.mainMenu.classList.add(classes.visuallyHidden);
    addInvertHeader(header, classes);
    dropdownMenuOpen(menu.menu, menu.menuContainer, classes);
  }
  header.companyBtn.classList.toggle('arrow-rotate');
}

function dropdownMenuOpen(menu, menuContainer, classes) {
  document.querySelector('.page__body').classList.toggle('overflow');
  menu.classList.toggle(classes.noOpacity);
  setTimeout(() => {
    menuContainer.classList.toggle(classes.isOpen);
  }, 300);
}

function dropdownMenuClose(menu, menuContainer, classes) {
  document.querySelector('.page__body').classList.remove('overflow');
  menuContainer.classList.remove(classes.isOpen);
  setTimeout(() => {
    menu.classList.remove(classes.noOpacity);
  }, 300);
}

header.menuBtn.addEventListener('click', handlerMenuBtn1);
header.companyBtn.addEventListener('click', handlerCompanyBtn);
