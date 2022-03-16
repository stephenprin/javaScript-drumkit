window.addEventListener("keydown", (e)=>{
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio)return; // stop function if not keycode for an audio not found
    audio.currentTime=0;
    audio.play();

    key.classList.add("playing")

})
const removeTransit=(e)=>{
  if(e.propertyName !=="transform")return;
  e.classList.remove("playing")
}
const allKeys=document.querySelectorAll(".key");
allKeys.forEach(element => {
    element.addEventListener("transitionend", removeTransit)
});