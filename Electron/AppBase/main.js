const { app, BrowserWindow, ipcMain } = require('electron')
const env = require('dotenv')
const path = require('path')
env.config()
const os = require('os')
const cpu = os.cpus()[0].model

const isDev = process.env.NODE_ENV !== undefined && process.env.NODE_ENV === "dev" ? true : false
const isMac = process.platform === 'darwin' ? true : false

const createWindow = () => {
  const win = new BrowserWindow({
    height: 600,
    width: 600,
    show: false,
    icon: path.resolve(__dirname, 'assets', 'icons', 'b.jpg'),
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadFile("./scr/index.html")
  if (isDev) {
    win.webContents.openDevTools()
  }

  win.once("ready-to-show", () => {
    win.show()
    win.webContents.send('cpu', cpu)
  })
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (!isMac) {
    app.quit()
  }
})

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

ipcMain.on("open", () => {
  createWindow()
})
