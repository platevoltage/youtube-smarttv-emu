import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
// import robot from "robotjs";

// You have to pass the filename of `widevinecdmadapter` here, it is
// * `widevinecdmadapter.plugin` on macOS,
// * `libwidevinecdmadapter.so` on Linux,
// * `widevinecdmadapter.dll` on Windows.
// app.commandLine.appendSwitch('widevine-cdm-path', '/opt/WidevineCdm/gmp-widevinecdm/latest/libwidevinecdm.so')
// The version of plugin can be got from `chrome://plugins` page in Chrome.
// app.commandLine.appendSwitch('widevine-cdm-version', '4.10.2662.3')
// app.commandLine.appendSwitch('disable-hid-blocklist')


const args = process.argv.slice(2); // Skip first two args
const customUrl = args[0];
console.log('CLI Arguments:', args);


function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    title: "Youtube",
    fullscreen: true,
    backgroundColor: "#000000",
    webPreferences: {
      sandbox: false,
      preload: path.join(__dirname, 'extensionScript.js'),
      plugins: true,
      additionalArguments: [...args]
    }
  });

  // win.webContents.openDevTools();

  win.loadURL(customUrl || 'https://youtube.com/tv#/?env_forceFullAnimation=true', {
    // userAgent: "Mozilla/5.0 (SMART-TV; Linux; Tizen 5.0) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/2.2 Chrome/107.0.3239.84 TV Safari/537.36"
    userAgent: "AppleCoreMedia/1.0.0.20L563 (Apple TV; U; CPU OS 16_5 like Mac OS X; en_us)"
    // userAgent: "Dalvik/2.1.0 (Linux; U; Android 9; AFTSS Build/PS7646.3550N) CTV"
  });

  // win.loadURL("chrome://usbinternals")

  win.on('page-title-updated', function (e) {
    e.preventDefault()
  });
  return win

};



app.on("ready", async () => {
  // await components.whenReady();
  // console.log('components ready:', components.status());
  const win = createWindow();
  win.webContents.executeJavaScript('console.log("test")')
  // note: your contextMenu, Tooltip and Title code will go here!
  win.webContents.session.on('select-hid-device', (event, details, callback) => {
    // Add events to handle devices being added or removed before the callback on
    // `select-hid-device` is called.
    win.webContents.session.on('hid-device-added', (event, device) => {
      console.log('hid-device-added FIRED WITH', device)
      // Optionally update details.deviceList
    })

    win.webContents.session.on('hid-device-removed', (event, device) => {
      console.log('hid-device-removed FIRED WITH', device)
      // Optionally update details.deviceList
    })

    event.preventDefault()
    if (details.deviceList && details.deviceList.length > 0) {
      callback(details.deviceList[0].deviceId)
    }
  })

  win.webContents.session.setPermissionCheckHandler((webContents, permission, requestingOrigin, details) => {
    if (permission === 'hid' && details.securityOrigin === 'file:///') {
      return true
    }
  })

  win.webContents.session.setDevicePermissionHandler((details) => {
    if (details.deviceType === 'hid' && details.origin === 'file://') {
      return true
    }
  })


})


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

