let boxs = document.querySelectorAll('.box');
let applause = document.querySelector('#applause');
let removeSound = (box_play) => {
    boxs.forEach(box => {
        box.childNodes[1].pause();
        box.setAttribute('style', 'background-color: #ffc107');
        if(box !== box_play)
            box.childNodes[1].currentTime = 0;
    });
};
let checkPlay;
let Play = false;
boxs.forEach((box) => {
    box.addEventListener('click', () =>{
        if(checkPlay === box.childNodes[1].getAttribute('id') && Play === true)
        {
            box.childNodes[1].pause();
            Play = false;
            return;
        }
        removeSound(box);
        box.childNodes[1].play();
        Play = true;
        checkPlay = box.childNodes[1].getAttribute('id');
        box.setAttribute('style', 'background-color: #28a745');
    });
})