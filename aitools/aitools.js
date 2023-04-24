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

// for getting the data from the textbox
function extract(){
    let text = document.getElementById("message")
    return text.value.toString().trim();
}

async function send() {
    let DATA = extract();
    console.log("\n[Front]: sending message..")
    try {
        const response = await fetch('http://localhost:1689/process', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: DATA.toString()
        });
        let data = await response.text();
        // display the response on the webpage
        console.log("[Front]: response received")

        // Here to display data on webpage
        let text = document.getElementById("content")
        text.value = text.value.concat(data.trim().concat("\n\n"));

    } catch (error) {
        console.error(error);
    }
}

