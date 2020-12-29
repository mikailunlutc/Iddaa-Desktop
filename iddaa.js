function fullscreen() {
  var isFullScreen = (document.fullscreenElement) ||
      (document.webkitFullscreenElement) ||
      (document.mozFullScreenElement) ||
      (document.msFullscreenElement);
 
  var docElm = document.documentElement;
  if (!isFullScreen) {
      if (docElm.requestFullscreen) {
          docElm.requestFullscreen();
      } else if (docElm.mozRequestFullScreen) {
          docElm.mozRequestFullScreen();
      } else if (docElm.webkitRequestFullScreen) {
          docElm.webkitRequestFullScreen();
      } else if (docElm.msRequestFullscreen) {
          docElm.msRequestFullscreen();
      }
  } else {
      if (document.exitFullscreen) {
          document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
      }
  }
}











const btn = document.getElementsByClassName("dropdown")[0];
const modal = document.getElementById("myModal");
const delet = document.getElementById('close-unclisive');
function openForm() {
  document.getElementById("myModal").style.display = "block";
}
function closeForm() {
  modal.remove();
}





const ıconOpen = document.getElementsByClassName('match-settingIcon')[0];

const BlockOpen = document.querySelector('.bulletinDropdown-unclisive');
function openBlk() {
    document.querySelector(".bulletinDropdown-unclisive").style.display = "block";
  }

  const  watch = document.getElementsByClassName('watch')[0];
const saat = new Date ();

watch = saat.getHours();
