function insertBackgroundImage(selector, insertElement) {
  const elements = document.querySelectorAll(selector);
  const inElements = document.querySelectorAll(insertElement);

  for (let i = 0; i < inElements.length; i++) {
    inElements[i].style.backgroundImage = 'url("' + elements[i].dataset.background + '")';
  }

}

if (document.contains(document.querySelector('.card'))) {
  insertBackgroundImage('.card__wrapper', '.card__wrapper');
}

if (document.contains(document.querySelector('.catalog-hero'))) {
  console.log('catalog-page');
  insertBackgroundImage('.catalog-hero', '.catalog-hero');
}
