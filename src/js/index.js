import '../scss/main.scss';

const videoTag = document.querySelector('.header__video--js');
const videoSourceTag = document.querySelector('.header__video--js source');
const videoSourceSrc = videoSourceTag.getAttribute('src');
const videoSourceDataSrc = videoSourceTag.getAttribute('data-src');

function setVideoSource() {
  const windowWidth = window.innerWidth;
  const videoSource = videoSourceTag.getAttribute('src');

  if (windowWidth > 764) {
    if (videoSource !== videoSourceDataSrc) {
      videoSourceTag.setAttribute('src', videoSourceDataSrc);
      videoTag.load();
    }
  } else {
    if (videoSource !== videoSourceSrc) {
      videoSourceTag.setAttribute('src', videoSourceSrc);
      videoTag.load();
    }
  }
}

window.addEventListener('load', setVideoSource);
window.addEventListener('resize', setVideoSource);
