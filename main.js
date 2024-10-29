const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'renderer.js'),
            contextIsolation: true,
            enableRemoteModule: false,
        }
    });

    win.loadFile('index.html');
}

app.whenReady().then(createWindow);

// Custom Cursor 
document.addEventListener('mousemove', (e) => {
    document.getElementById('cursor').style.left = `${e.pageX}px`
    document.getElementById('cursor').style.top = `${e.pageY}px`
})

// Play/Stop System
const play = document.getElementById('play');
const player_video = document.getElementById('videoPlayer');
const player_audio = document.getElementById('audioPlayer');

play.addEventListener('click', () => { player_video.play(); player_audio.play(); });
