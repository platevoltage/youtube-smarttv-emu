import { app, BrowserWindow } from 'electron';
import * as path from 'path';

const createMainPopup = () => {
  const win = new BrowserWindow({
    width: 550,
    height: 500,
    visualEffectState: "active",
    vibrancy: 'sidebar',
    resizable: false,
    maximizable: false,
    movable: false,
    // titleBarStyle: "hidden",
    useContentSize: true,
    frame: false,
    // show: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      // preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadURL('https://youtube.com');
  return win
      
};



app.whenReady().then(async () => {

  createMainPopup();
  // note: your contextMenu, Tooltip and Title code will go here!
})


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

