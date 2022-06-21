import {header, menu, classes} from "../_vars";

const handler1 = () => {
  document.querySelector('.page__body').classList.add('overflow');
  menu.burgerMenu.classList.add(classes.noOpacity);
  header.burgerBtn.classList.add(classes.openBtn);
  setTimeout(() => {
    menu.burgerMenuList.classList.add(classes.isOpen);
  }, 300);
  header.burgerBtn.removeEventListener('click', handler1);
  header.burgerBtn.addEventListener('click', handler2);
}

const handler2 = () => {
  document.querySelector('.page__body').classList.remove('overflow');
  menu.burgerMenuList.classList.remove(classes.isOpen);
  header.burgerBtn.classList.remove(classes.openBtn);
  setTimeout(() => {
    menu.burgerMenu.classList.remove(classes.noOpacity);
  }, 300);
  header.burgerBtn.removeEventListener('click', handler2);
  header.burgerBtn.addEventListener('click', handler1);
}

header.burgerBtn.addEventListener('click', handler1);
