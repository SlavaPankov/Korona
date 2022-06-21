import _ from "underscore";

const activeClass = 'picture-visible';
const spinPhotos = () => {
  let container = document.querySelector('.scroll__wrapper')
  container.addEventListener('wheel', (event) => {
    if (event.target.closest('div').nextElementSibling && event.deltaY > 0) {
      event.preventDefault()
      event.target.closest('div').classList.remove(activeClass)
      event.target.closest('div').nextElementSibling.classList.add(activeClass)
      enableScroll();
    } else if (event.target.closest('div').previousElementSibling && event.deltaY < 0) {
      event.preventDefault()
      event.target.closest('div').classList.remove(activeClass)
      event.target.closest('div').previousElementSibling.classList.add(activeClass)
      enableScroll();
    }
  })
}

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
let keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
let supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () {
      supportsPassive = true;
    }
  }));
} catch (e) {
}

let wheelOpt = supportsPassive ? {passive: false} : false;
let wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

if (document.querySelector('.scroll__wrapper')) {

  const offset = document.querySelector('.scroll__wrapper').getBoundingClientRect();
  const top = offset.top;

  if (window.innerWidth > 1279) {
    window.addEventListener('scroll', (e) => {
      console.log(document.documentElement.scrollTop);
      console.log(top);
      if (
        document.documentElement.scrollTop >
        top - 250
      ) {
        spinPhotos()
      }
    });
  } else {
    let initialX = null;
    let initialY = null;

    function startTouch(e) {
      initialX = e.touches[0].clientX
      initialY = e.touches[0].clientY
    }

    function moveTouch(e) {
      if (initialX === null) {
        return;
      }

      if (initialY === null) {
        return;
      }

      let currentX = e.touches[0].clientX;
      let currentY = e.touches[0].clientY;

      let diffX = initialX - currentX;
      let diffY = initialY - currentY;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        // sliding horizontally
        if (diffX > 0) {
          // swiped left
          swipePhoto(e, 'left');
        } else {
          // swiped right
          swipePhoto(e, 'right');
        }
      }
    }

    function swipePhoto(e, direct) {
      const currentImage = document.querySelector('.' + activeClass);
      if (direct === 'left' && currentImage.nextElementSibling) {
        currentImage.nextElementSibling.classList.add(activeClass);
        currentImage.classList.remove(activeClass);
      } else if (direct === 'right' && currentImage?.previousElementSibling) {
        currentImage.previousElementSibling.classList.add(activeClass);
        currentImage.classList.remove(activeClass);
      }
    }

    const container = document.querySelector('.scroll__wrapper');

    container.addEventListener('touchstart', startTouch, false)
    container.addEventListener('touchmove', _.throttle(moveTouch, 42), false)
  }

}
