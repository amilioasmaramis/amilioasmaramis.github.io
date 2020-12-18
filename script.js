let spoilerGambar = document.getElementById('spoilerGambar');
let spoilerVideo = document.getElementById('spoilerVideo')
let song = new Audio();

function playSong(hero) {
    song.src = "audio/" + hero + ".mp3"
    song.play()
    spoilerGambar.src = "image/" + hero + ".jpg";
    spoilerVideo.src = "video/" + hero + ".mp4";
    spoilerVideo.play();
    spoilerRandom.src = "image/1.jpg";
}

let spoilerRandom = document.getElementById('spoilerRandom');

function playRandom() {
    var myImages1 = new Array();
    myImages1[0] = "image/Kunka.jpg";
    myImages1[1] = "image/Earthseeker.jpg";
    myImages1[2] = "image/BountyHunter.jpg";
    myImages1[3] = "image/Juggernaut.jpg";
    myImages1[4] = "image/Invoker.jpg";
    myImages1[5] = "image/Wd.jpg";

    var video = new Array();
    video[0] = "Kunka";
    video[1] = "Earthseeker";
    video[2] = "BountyHunter";
    video[3] = "Juggernaut";
    video[4] = "Invoker";
    video[5] = "Wd";

    var rnd = Math.floor(Math.random() * myImages1.length); 
    // spoilerVideo.src = "video/" + hero + ".mp4";
    spoilerRandom.src = myImages1[rnd];
    switch (rnd) {
        case 0:
            spoilerRandom.src = myImages1[rnd];
            spoilerVideo.src = "video/" + video[rnd] + ".mp4";
            spoilerVideo.play();
            spoilerGambar.src = myImages1[rnd];
            break;
        case 1:
            spoilerRandom.src = myImages1[rnd];
            spoilerVideo.src = "video/" + video[rnd] + ".mp4";
            spoilerVideo.play();
            spoilerGambar.src = myImages1[rnd];
            break;
        case 2:
            spoilerRandom.src = myImages1[rnd];
            spoilerVideo.src = "video/" + video[rnd] + ".mp4";
            spoilerVideo.play();
            spoilerGambar.src = myImages1[rnd];
            break;
        case 3:
            spoilerRandom.src = myImages1[rnd];
            spoilerVideo.src = "video/" + video[rnd] + ".mp4";
            spoilerVideo.play();
            spoilerGambar.src = myImages1[rnd];
            break;
        case 4:
            spoilerRandom.src = myImages1[rnd];
            spoilerVideo.src = "video/" + video[rnd] + ".mp4";
            spoilerVideo.play();
            spoilerGambar.src = myImages1[rnd];
            break;
        case 5:
            spoilerRandom.src = myImages1[rnd];
            spoilerVideo.src = "video/" + video[rnd] + ".mp4";
            spoilerVideo.play();
            spoilerGambar.src = myImages1[rnd];
            break;
    }
    
}

