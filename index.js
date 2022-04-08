window.addEventListener("load", function() {
    document.getElementById("wise1").addEventListener("click", playEye);

    function playEye() {
        var audio = document.getElementById("wise1audio");
        audio.play();
        audio.volume = .6;
    }

    document.getElementById("wise2").addEventListener("click", playWise2);

    function playWise2() {
        var audio = document.getElementById("wise2audio");
        audio.play();
        audio.volume = .6;
    }

    document.getElementById("little1").addEventListener("click", playLittle);

    function playLittle() {
        var audio = document.getElementById("little1audio");
        audio.play();
        audio.volume = .6;
    }    
  })
