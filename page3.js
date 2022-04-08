window.addEventListener("load", function() {
    document.getElementById("wise3").addEventListener("click", playWise3);

    function playWise3() {
        var audio = document.getElementById("wise3audio");
        audio.play();
        audio.volume = .6;
    }
  
    document.getElementById("little2").addEventListener("click", playLittle2);

    function playLittle2() {
        var audio = document.getElementById("little2audio");
        audio.play();
        audio.volume = .6;
    }
    
  })