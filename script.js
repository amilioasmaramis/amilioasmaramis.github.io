let spoilerGambar = document.getElementById('spoilerGambar');
let spoilerVideo = document.getElementById('spoilerVideo')
let song = new Audio();

function playSong(hero) {
    song.src = "audio/" + hero + ".mp3"
    song.play()
    spoilerGambar.src = "image/" + hero + ".jpg";
    spoilerVideo.src = "video/" + hero + ".mp4";
    spoilerVideo.play();
}

let spoilerRandom = document.getElementById('spoilerRandom');

function playRandom() {
    var myImages1 = new Array();
    myImages1[0] = "image/1.jpg";
    myImages1[1] = "image/Invoker.jpg";
    myImages1[2] = "image/Wd.jpg";
    myImages1[3] = "image/Wr.jpg";
    myImages1[4] = "image/BountyHunter.jpg";
    myImages1[5] = "image/Bs.jpg";
    myImages1[6] = "image/Earthseeker.jpg";
    myImages1[7] = "image/Juggernaut.jpg";
    myImages1[8] = "image/Kunka.jpg";
    myImages1[9] = "image/Pudge.jpg";
    myImages1[10] = "image/Techis.jpg";
    myImages1[11] = "image/Void.jpg";
    var rnd = Math.floor(Math.random() * myImages1.length);
    if (rnd == 0) {
            rnd = 1;
    } 
    spoilerRandom.src = myImages1[rnd];
}
1920
1080

