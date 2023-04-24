// Specify program requirements
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

// configure openai key and create openai client
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

messages = []
messages.push({ role: "user", content: "Hello!" })
let completion_text = "";


async function chat(MESSAGE) {
    // add user message to the array of messaging history
    messages.push({role: "user", content: MESSAGE.toString()})

    // now try to get the response back from openAI
    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: messages,
        });
        completion_text = completion.data.choices[0].message.content;
        // now we have to add AI response as well to the history, this how ChatGPT works
        messages.push({role: "assistant", content: completion_text.toString()})

    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
}



// Start the server and respond to the request
const express = require('express');
const cors = require('cors')
const app = express();
const port = 1689;
const bodyParser = require('body-parser');
app.use(bodyParser.text()); // parse plain text body

const corsOptions = {
    origin: 'http://localhost:63342',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.post('/process', cors(corsOptions), (req, res) =>{
    const data = req.body;
    console.log("[Back]: message received, waiting for AI response")
    // once we have received the data we just need to send to chat to process
    chat(data).then(() => {
        res.send(completion_text.toString())
        console.log(completion_text)
        console.log("[Back] response sent")
    });
});
app.listen(port, () =>{
    console.log('[Back]: Sever has started...');
});
