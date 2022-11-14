import { app, BrowserWindow } from 'electron';
import * as path from 'path';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    title: "Youtube",
    fullscreen: true,
    // visualEffectState: "active",
    // vibrancy: 'sidebar',
    // resizable: false,
    // maximizable: false,
    // movable: false,
    // titleBarStyle: "hidden",
    // useContentSize: true,
    // frame: false,
    // show: false,
    webPreferences: {
      // nodeIntegration: false,
      // contextIsolation: true,
      // preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadURL('https://youtube.com/tv', {
    userAgent: "Mozilla/5.0 (SMART-TV; Linux; Tizen 5.0) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/2.2 Chrome/63.0.3239.84 TV Safari/537.36"
  });
  win.on('page-title-updated', function(e) {
    e.preventDefault()
  });
  return win
      
};



app.whenReady().then(async () => {

  createWindow();
  // note: your contextMenu, Tooltip and Title code will go here!
})


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

