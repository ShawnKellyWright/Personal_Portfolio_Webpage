/* following plays audio mp3 file of orignal Death Star fireing lazer 
when you click my social links on footer section of index.html */
const btn = document.getElementById("btn");

btn.onclick = () => {
    const audio = new Audio("audio/death_star_sound.mp3");
    audio.play();
}