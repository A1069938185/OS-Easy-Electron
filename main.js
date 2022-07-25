const http = require('http')
const path = require('path')
const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");
const createWindow = () => {
  const server = http.createServer((req,res)=>{
    
  })
  const win = new BrowserWindow({
    width: 1220,
    height: 740,
    minWidth:1220,
    minHeight:740,
    autoHideMenuBar:true,
    webPreferences: {webSecurity: false},
  });
  if (isDev) {
    // win.loadURL("http://127.0.0.1:3000").catch(() => {
    //   win.reload();
    // });
    win.loadFile("index.html");
  } else {
    win.loadFile("index.html");
  }
};
app.whenReady().then(() => {
  createWindow();
  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
  });
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
});
