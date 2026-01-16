const unmute = document.querySelector(".unmute");
const video = document.querySelector(".video");
unmute.addEventListener("click", ()=> {
    video.muted = false;
});