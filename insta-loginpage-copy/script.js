const imgID = document.getElementById('iphonepic');
const imgs = ['images/rotation/screenshot1.png','images/rotation/screenshot2.png','images/rotation/screenshot3.png', 'images/rotation/screenshot4.png']; 

let currentIndex = 0;

function changeImg() {
    imgID.style.opacity = .5; 

    setTimeout(() => {
        imgID.src = imgs[currentIndex];
        currentIndex = (currentIndex + 1) % imgs.length;
        imgID.style.opacity = 1; 
    }, 750); 
}
setInterval(changeImg, 10000);

