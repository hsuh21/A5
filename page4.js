window.addEventListener("load", function() {
    document.getElementById("wise4").addEventListener("click", playWise4);

    function playWise4() {
        var audio = document.getElementById("wise4audio");
        audio.play();
        audio.volume = .6;
    }
  
    document.getElementById("little3").addEventListener("click", playLittle3);

    function playLittle3() {
        var audio = document.getElementById("little3audio");
        audio.play();
        audio.volume = .6;
    }
    
  })