const { Configuration, OpenAIApi } = require("openai");

let OPENAI_API_KEY= "";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Say this is a test",
    temperature: 0,
    max_tokens: 7,
});


function addApiKey(){
    let response = prompt("Enter API Key Here:")
    if (response.toString().trim() !== "") {
        OPENAI_API_KEY = response.toString();
    }
}