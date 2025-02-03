import { app, BrowserWindow, components } from 'electron';
import * as path from 'path';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    title: "Youtube",
    fullscreen: true,
    // kiosk: true,
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
      sandbox: false,
      preload: path.join(__dirname, 'extensionScript.js')
    }
  });

  // win.webContents.openDevTools();

  win.loadURL('https://youtube.com/tv', {
    // userAgent: "Mozilla/5.0 (SMART-TV; Linux; Tizen 5.0) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/2.2 Chrome/107.0.3239.84 TV Safari/537.36"
    userAgent: "AppleCoreMedia/1.0.0.20L563 (Apple TV; U; CPU OS 16_5 like Mac OS X; en_us)"
  });


  win.on('page-title-updated', function (e) {
    e.preventDefault()
  });
  return win

};



app.on("ready", async () => {
  await components.whenReady();
  console.log('components ready:', components.status());
  const win = createWindow();
  win.webContents.executeJavaScript('console.log("test")')
  // note: your contextMenu, Tooltip and Title code will go here!

})


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

