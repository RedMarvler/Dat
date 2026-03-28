const myImageFile = "./resources/Dat.jpg"; 
const mySoundFile = "./resources/mamboman-bo-shi-ge-ju-matikanetannhauser.mp3";

window.addEventListener('click', (e) => {
    const img = document.createElement('img');
    img.src = myImageFile;
    img.className = 'pop-image';
    
    img.style.left = `${e.pageX}px`;
    img.style.top = `${e.pageY}px`;
    
    document.body.appendChild(img);

    const audio = new Audio(mySoundFile);
    audio.play();

    setTimeout(() => {
        img.remove();
    }, 1000);
});