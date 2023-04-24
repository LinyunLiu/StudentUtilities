//assigning button and input text
var downloadBtn = document.querySelector(".download-button");
var inputURL = document.querySelector(".url");

//listener to get input value
downloadBtn.addEventListener("click", () => {
  console.log(`URL: ${inputURL.value}`);
  urlGET(inputURL.value);
});

function urlGET(URL) {
  window.location.href = `http://localhost:4000/download?URL=${URL}`;
}
