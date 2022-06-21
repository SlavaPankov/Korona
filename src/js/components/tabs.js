const tabBtn = document.querySelectorAll('.tabs-list__item');
const tabBlock = document.querySelectorAll('.characteristics__block');

for (let i = 0; i < tabBtn.length; i++) {
  tabBtn[i].addEventListener('click', (e) => {
    tabBtn.forEach(btn => {
      btn.classList.remove('active');
    });
    tabBlock.forEach(block => {
      block.dataset.active = '';

      if (tabBtn[i].dataset.path === block.dataset.target) {
        block.dataset.active = 'true';
      }
    });
    e.target.classList.add('active');
  });
}
