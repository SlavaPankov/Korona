import {header, classes} from '../_vars';

export function addInvertHeader(header, classes) {
    header.right.classList.add(classes.header);
    header.buttons.forEach(btn => {
      btn.classList.add(classes.buttons);
    });
}

export function removeInvertHeader(header, classes) {
  header.right.classList.remove(classes.header);
  header.buttons.forEach(btn => {
    btn.classList.remove(classes.buttons);
  });
}

window.addEventListener('scroll', () => {
  if (window.innerWidth >= 1279 && document.querySelector('.page__body').classList.contains('main-page')) {
    if (window.scrollY > 150) {
      addInvertHeader(header, classes);
    } else {
      removeInvertHeader(header, classes);
    }
  }
});

if (!document.querySelector('.page__body').classList.contains('main-page') && window.innerWidth >= 1279) {
  addInvertHeader(header, classes);
}

window.addEventListener('resize', () => {
  if (!document.querySelector('.page__body').classList.contains('main-page') && window.innerWidth <= 1279) {
    removeInvertHeader(header, classes);
  } else {
    addInvertHeader(header, classes);
  }
});
