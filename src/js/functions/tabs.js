function tabs(selectorPath, selectorTarget, activeClass) {
  const path = document.querySelectorAll(selectorPath);
  const target = document.querySelectorAll(selectorTarget);

  for (let i = 0; i < path.length; i++) {
    path[i].addEventListener('click', (e) => {
      path.forEach(item => {
        item.classList.remove(activeClass);
      });
      target.forEach(item => {
        item.dataset.active = '';

        if (path[i].dataset.path === item.dataset.target) {
          item.dataset.active = 'true';
        }
      });
      e.currentTarget.classList.add(activeClass);
    });
  }
}

if (document.querySelector('.characteristics')) {
  tabs('.tabs-list__item', '.characteristics__block', 'active');
}

if (document.querySelector('.prospects')) {
  tabs('.prospects-list__item', '.prospects__picture', 'visible');
}
