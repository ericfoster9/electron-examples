const ipc = require('electron').ipcRenderer
const fs = require("fs");



const selectDirBtn = document.getElementById('select-directory')

selectDirBtn.addEventListener('click', function (event) {
  ipc.send('open-file-dialog')
})

ipc.on('selected-directory', function (event, path) {
  //document.getElementById('selected-file').innerHTML = `You selected: ${path}`

  // Asynchronous read
  fs.readFile(path[0], function (err, data) {
    if (err) {
      return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
    document.getElementById('selected-file').innerHTML = data.toString();
  });


})
