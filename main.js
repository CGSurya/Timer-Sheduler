// Desktop shell for Timebox (Windows, macOS, Linux).
const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 780,
    minWidth: 360,
    minHeight: 520,
    title: 'Timebox',
    backgroundColor: '#EDF0F3',
    icon: path.join(__dirname, 'app', 'icon-512.png'),
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      backgroundThrottling: false // keep timers accurate while minimized
    }
  });
  win.loadFile(path.join(__dirname, 'app', 'index.html'));
}

Menu.setApplicationMenu(null);
app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
