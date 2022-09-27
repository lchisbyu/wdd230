

document.getElementById('copyright').textContent = new Date().getFullYear();

const oLastModified = new Date(document.lastModified);

const timestamp = "Last updated: " + oLastModified.getMonth() + "/" + oLastModified.getDay() + "/" + oLastModified.getFullYear() +
  oLastModified.getHours() + ":" + oLastModified.getMinutes() + ":" + oLastModified.getSeconds() 

  document.getElementById('timestamp').textContent = timestamp



