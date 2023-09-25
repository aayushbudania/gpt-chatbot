import axios from "axios";
const { Configuration, OpenAIApi } = require("openai");

const OPENAI_API_KEY = "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";

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function sendMessageToOpenAI(message) {
  try {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: message,
        temperature: 0.9,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });

      console.log("Response:", response);
      return response.data.choices[0].text;
  }
  catch(err) {
    console.log("Error:",err);
    return "Error in API Request";
  }
  
}
