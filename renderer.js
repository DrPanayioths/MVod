const fileInput = document.getElementById('fileInput');
const audioPlayer = document.getElementById('audioPlayer');
const videoPlayer = document.getElementById('videoPlayer');

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const fileURL = URL.createObjectURL(file);

    if (file.type.startsWith('audio/')) {
        audioPlayer.src = fileURL;
        audioPlayer.play();
        videoPlayer.style.display = 'none';
        audioPlayer.style.display = 'block';
    } else if (file.type.startsWith('video/')) {
        videoPlayer.src = fileURL;
        videoPlayer.play();
        audioPlayer.style.display = 'none';
        videoPlayer.style.display = 'block';
    }
});

// Custom Cursor 
document.addEventListener('mousemove', (e) => {
    document.getElementById('cursor').style.left = `${e.pageX}px`
    document.getElementById('cursor').style.top = `${e.pageY}px`
})
