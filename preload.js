const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    navigate: (url) => {
        console.log('Sending navigate event with URL:', url);
        ipcRenderer.send('navigate', url);
    }
});
