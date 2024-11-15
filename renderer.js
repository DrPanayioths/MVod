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

// Progress Bar 
document.addEventListener('DOMContentLoaded', () => {
    const progress_bar = document.getElementById('progressbar_progress');
    const progress_frame = document.getElementById('progressbar_main');
    const Video_Player = document.getElementById('videoPlayer');

    Video_Player.addEventListener('timeupdate', () => {
        const progress = (Video_Player.currentTime / Video_Player.duration) * 100;
        progress_bar.style.width = progress + '%';
    });
    progress_frame.addEventListener('click', (e) => {
        const rect = progress_frame.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        Video_Player.currentTime = pos * Video_Player.duration;
    });

    // Throw Video
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        document.body.addEventListener(eventName, preventDefaults, false);
    });
    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    document.body.addEventListener('drop', (e) => {
        const file = e.dataTransfer.files[0];
        const fileURL = URL.createObjectURL(file);

        if (file.type.startsWith('video/')) {
            videoPlayer.src = fileURL;
            videoPlayer.play();
        }
    });

});

// Custom Cursor 
document.addEventListener('mousemove', (e) => {
    document.getElementById('cursor').style.left = `${e.pageX}px`
    document.getElementById('cursor').style.top = `${e.pageY}px`
});

// Volume Up And Down
document.addEventListener('keydown', function(event){
    audio = document.getElementById("videoPlayer")
    if (event.code == 'ArrowDown') {
        if (audio.volume != 1.3877787807814457e-16) {
            audio.volume = audio.volume - 0.1;
        }
    }
});
document.addEventListener('keydown', function(event){
    if (event.code == 'ArrowUp') {
        if (audio.volume < 1) {
            audio.volume = audio.volume + 0.1;
        }
    }
});


// Mute/Unmute Audio
document.addEventListener('keydown', function(event) {
    const video = document.getElementById("videoPlayer");
    const volumes = parseFloat(localStorage.getItem("volumes"));
    if (localStorage.getItem("volumes") === null) { localStorage.setItem("volumes", video.volume); }

    if (event.code === "KeyM") {
        if (video.volume > 0) {
            video.volume = 0.0;
            localStorage.setItem("volume", "disabled");
        } else {
            video.volume = volumes;
            localStorage.setItem("volume", "enabled");
        }
    }
});
