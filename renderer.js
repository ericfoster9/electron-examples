// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const sh = require('electron').shell

var extlink = document.getElementById("ext-link");

extlink.addEventListener('click',function(e) {
  e.preventDefault();

  console.log(e);
  sh.openExternal(e.target.href);
})
