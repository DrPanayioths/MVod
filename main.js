const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 500,
        autoHideMenuBar: true,
        frame: false,
        webPreferences: {
            preload: path.join(__dirname, 'renderer.js'),
            contextIsolation: true,
            enableRemoteModule: false,
        }
    });

    win.loadFile('index.html');
}

app.whenReady().then(createWindow);


