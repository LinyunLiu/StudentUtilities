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

// for getting the data from the text box
function extract(){
    let message = document.getElementById("message")

    if (message.value.toString().trim().length !== 0) {
        //display user input in the chat display
        let display = document.getElementById("content")
        display.value = display.value.concat(String.fromCodePoint(0x1F340) + " " + message.value.trim().concat("\n\n"));
    }

    return message.value.toString().trim();
}

async function send() {
    let DATA = extract();
    if (DATA.toString().trim().length === 0){
        alert("empty message")
    }
    else {
        console.log("\n[Front]: sending message..")
        let input = document.getElementById("message")
        input.value = "sending message ...";
        try {
            const response = await fetch('http://localhost:1689/process', {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain'
                },
                body: DATA.toString()
            });
            let data = await response.text();
            console.log("[Front]: response received")
            input.value = "";

            // Here to display data on webpage
            let text = document.getElementById("content")
            text.value = text.value.concat(String.fromCodePoint(0x1F341)+" "+data.trim().concat("\n\n"));

        } catch (error) {
            console.error(error);
        }
    }
}

