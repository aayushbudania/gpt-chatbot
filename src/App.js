import { useState } from "react";
import { sendMessageToOpenAI } from "./openai";
import "./App.css";
import { sendMessageToBard } from "./bard";
import { getBardResponse } from "./bardApi";

function App() {
  const [input, setInput] = useState(""); // Question asked by the user
  const [messages, setMessages] = useState([]); // List of messages include user and bot response

  /*OpenAI Chat Completion API*/
  const handleMessageSubmit = async () => { 
    const response = await sendMessageToOpenAI(input); // makes api call to openAi completions api
    setMessages([
      ...messages,
      { text: input, isUser: true }, // user's question
      { text: response, isUser: false }, // bot's response
    ]);
    setInput("");
    console.log("MESSAGES:", messages);
  };

  const handleMessageSubmitBard = async () => { 
    // const response = await sendMessageToBard(input); 
    const response = await getBardResponse(input); 
    setMessages([
      ...messages,
      { text: input, isUser: true },
      { text: response, isUser: false },
    ]);
    setInput("");
    console.log("MESSAGES:", messages);
  };

  return (
    <div className="App">
      <div className="chat-container">
        {messages.map((message, index) => (
          <div
            key={index}
            className={message.isUser ? "user-message" : "bot-message"}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleMessageSubmitBard}>Send</button>
      </div>
    </div>
  );
}

export default App;
