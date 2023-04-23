const { Configuration, OpenAIApi } = require("openai");

const OPENAI_API_KEY= "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";

const configuration = new Configuration({apiKey: OPENAI_API_KEY});
const openai = new OpenAIApi(configuration);

async function generateText(){
    const completion = await openai.createCompletion({
        model: "gpt-3.5-turbo",
        messages: "tell me about Node.js",
    });
    console.log(completion.data.choices[0].text);
}
generateText()
