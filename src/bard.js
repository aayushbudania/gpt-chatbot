// const { DiscussServiceClient } = require("@google-ai/generativelanguage");
// const { GoogleAuth } = require("google-auth-library");

// const MODEL_NAME = "models/chat-bison-001";
// const API_KEY = "AIzaSyCo_hN3JAUfk4jJ2s_F-ChzBaAX_9DEuxQ";

// const client = new DiscussServiceClient({
//   authClient: new GoogleAuth().fromAPIKey(API_KEY),
// });

// export const sendMessageToBard = async (message) => {
//     const context = "";
//     const messages = [];
    
//     messages.push({ "content": message });
    
//     client.generateMessage({
//       model: MODEL_NAME,
//       temperature: 0.25,
//       candidateCount: 1,
//       top_k: 40,
//       top_p: 0.95,
//       prompt: {
//         context: context,
//         // examples: examples,
//         messages: messages,
//       },
//     }).then(result => {
//         console.log(JSON.stringify(result, null, 2));
//         return result;
//     });
// }

