function goToTiny(){
    window.open("https://tinywow.com/")
}
function goToSpeech(){
    window.open("https://voiceover.speechify.com/")
}
function goToOpenAI(){
    window.open("https://openai.com/")
}
function goToQuillBot(){
    window.open("https://quillbot.com/")
}

function addApiKey() {
    let response = prompt("Enter API Key Here:")
    if (response.toString().trim() !== "") {
        alert(response.toString())
    }
}



