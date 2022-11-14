import { app } from 'electron';



let data = {};


app.whenReady().then(async () => {

  
  // note: your contextMenu, Tooltip and Title code will go here!
})


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

