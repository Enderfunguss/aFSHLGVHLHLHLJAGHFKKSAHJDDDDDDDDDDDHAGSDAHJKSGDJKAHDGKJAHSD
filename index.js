function preload(){

}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,300,300);
}

function personButtonInfo(){
    window.alert('Arent things just easier when you ask? This button tells which person the webcam can see!');
}

function accuracyButtonInfo(){
    window.alert('Beep skaboop beep boop. The accuracy is shown here!');
}

function secretClick(){
    var audio = new Audio('wonderful-idea.ogg');
    audio.play();
    window.alert('Go to f11 to see the full website background.');
}