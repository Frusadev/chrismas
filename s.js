document.getElementById("nono-btn").addEventListener("click", () => {
  document.querySelector("body").innerHTML = `
    <iframe width="100%" height="100%" frameborder="0" 
        src="https://www.shadertoy.com/embed/4dlGRn?gui=false&t=10&paused=false&muted=false" 
        allowfullscreen fullscreen="1" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
    <audio autoplay loop style="display: block;">
      <source autoplay src="./ret.mp3" type="audio/mp3">
      Your browser does not support the audio element.
    </audio>
`;
  const audioPlayer = document.getElementById("audio");
  audioPlayer.play()
});
