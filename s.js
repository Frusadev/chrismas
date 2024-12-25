document.addEventListener("DOMContentLoaded", function () {
  const nonoBtn = document.getElementById("nono-btn");
  const domBody = document.querySelector("body");
  const audioPlayer = document.getElementById("audio");
  let app = document.getElementById("typewriter");
  let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
  });

  typewriter
    .typeString("Salut, je suis Daniel")
    .pauseFor(2000)
    .deleteAll()
    .typeString("Amuse-toi bien et Joyeux Noël")
    .pauseFor(2000)
    .start();

  nonoBtn.addEventListener("click", () => {
    domBody.innerHTML = `
            <iframe width="100%" height="100%" frameborder="0" 
                src="https://www.shadertoy.com/embed/4dlGRn?gui=false&t=10&paused=false&muted=false" 
                allowfullscreen fullscreen="1" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
            <audio autoplay loop style="display: block;">
              <source autoplay src="./ret.mp3" type="audio/mp3">
              Your browser does not support the audio element.
            </audio>
        `;
    audioPlayer.play();
  });
});
