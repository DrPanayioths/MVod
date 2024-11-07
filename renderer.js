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
    const Audio_Player = document.getElementById('audioPlayer');

    Video_Player.addEventListener('timeupdate', () => {
        const progress = (Video_Player.currentTime / Video_Player.duration) * 100;
        progress_bar.style.width = progress + '%';
    });
    progress_frame.addEventListener('click', (e) => {
        const rect = progress_frame.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        Video_Player.currentTime = pos * Video_Player.duration;
        Audio_Player.currentTime = pos * Audio_Player.duration;
    });

    // Throw Video and Audio
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

        if (file.type.startsWith('audio/')) {
            audioPlayer.src = fileURL;
            audioPlayer.play();
        } else if (file.type.startsWith('video/')) {
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
