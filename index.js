const sh = require('electron').shell

var extlink = document.getElementById("ext-link");

extlink.addEventListener('click',function(e) {
  e.preventDefault();

  console.log(e);
  sh.openExternal(e.target.href);
})
