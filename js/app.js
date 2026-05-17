const video = document.querySelector('.video');
const btnPausePlay = document.getElementById('play-pause');
const img = document.querySelector('#play-pause img');
const barreOrange = document.querySelector('.barre-orange');
const juice = document.querySelector('.juice')
const muteBtn = document.getElementById('mute');
const fullScreen = document.getElementById('fullscreen');
const volumeSlider = document.getElementById('volume-slider');

btnPausePlay.addEventListener('click', togglePlayPause);
video.addEventListener('click', togglePlayPause);

function togglePlayPause(){
    if(video.paused){
        img.src = "../ressources/pause.svg";
        video.play();
    }
    else {
        img.src = "../ressources/play.svg";
        video.pause();
    }
}

// la barre orange

video.addEventListener('timeupdate', () => {
   
        let juicePos = video.currentTime / video.duration;

        juice.style.width = juicePos * 100 + "%";

    if(video.ended){
        img.src = "../ressources/play.svg";
    }

})



// Volume 

volumeSlider.addEventListener('change', () => {

    video.volume = volumeSlider.value / 100;
    console.log(video.volume)

})


// mute

muteBtn.addEventListener('click', () => {

    if(video.muted){
        video.muted = false;
        muteBtn.innerText = "Mute";
    }
    else {
        video.muted = true;
        muteBtn.innerText = "Unmute";
    }

})

// clic sur la barre

let rect = barreOrange.getBoundingClientRect();
let largeur = rect.width;

barreOrange.addEventListener('click', (e) => {

    let x = e.clientX - rect.left;

    let widthPercent = ((x*100/largeur));
    console.log(widthPercent);

    let durationVideo = video.duration;

    // position en seconde par rapport au pourcentage
    video.currentTime = durationVideo * (widthPercent / 100);

})

window.addEventListener('resize', () => {
    let rect = barreOrange.getBoundingClientRect();
    let largeur = rect.width;

})


video.addEventListener('dblclick', () => {
    video.requestFullscreen();
})
fullScreen.addEventListener('click', () => {
    video.requestFullscreen();
})

// scroll up
document.querySelector(".scroll-up-btn").addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
        document.querySelector("html").style.scrollBehavior = "unset";
    }, 2000);
}); 

  $(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
      $('#home').fadeIn();
    }
    else {
      $('#home').fadeOut();
    }
  });
  
  
  $(document).ready(function () {
    $("#home").click(function (event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
  });
  





const mainEle = document.querySelectorAll("h2");
const conEle = document.querySelectorAll(".chapitre");
const foot = document.querySelector(".display-f");

for (let x = 0; x < mainEle.length; x++) {
    mainEle[x].addEventListener("click", function () {
        console.log(mainEle[x].firstElementSibling);
        clearActive();        
        mainEle[x].nextElementSibling.classList.toggle("chapitre");        
        foot.classList.toggle("display-f");
        
        })
}

function clearActive() {
    for (let x = 0; x < conEle.length; x++) {
        conEle[x].classList.remove("chapitre");
    }
}

