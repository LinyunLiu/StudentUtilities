function urlGET() {
  let URL = document.getElementById("url").value
  if (URL.toString().length !== 0){
    window.open( `http://localhost:4000/download?URL=${URL.trim()}`);
  }
}
