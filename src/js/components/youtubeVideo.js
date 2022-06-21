import {renderVideoFrame} from "../functions/renderVideoFrame";

const videoContainer = document.querySelector('.video');
const videoBanner = document.querySelector('.video__picture');
const playBtn = document.querySelector('.video__btn');

if (playBtn) {
  playBtn.addEventListener('click', (e) => {
    videoBanner.remove();
    e.target.remove();
    videoContainer.append(renderVideoFrame());
  });
}
