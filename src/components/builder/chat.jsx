import { useState } from "react";
import { openai } from "./openai"; 
import InputForm from "./inputform";
import Conversation from "./Conversation";
import { useCallback } from "react";

export default function Chat() {
  const [conversations, setConversations] = useState([]); // To track all the conversations
  const [aiMessage, setAiMessage] = useState(""); // To store the new AI responses
  const [userMessage, setUserMessage] = useState(""); // To store the message sent by the user

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault(); //To prevent the default form submission behaviour

      // Storing the user message to the state
      setConversations((prev) => {
        return [
          ...prev,
          {
            message: userMessage,
            isHuman: true,
          },
        ];
      });
      setUserMessage(""); // Emptying the input field

      const stream = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userMessage }],
        stream: true, // This is required to stream the response
      });

      let streamedMessage = "";

      // The stream will be read till its closed
      for await (const part of stream) {
        setAiMessage((prev) => prev + part.choices[0].delta.content);

        // Once the entire message is received, the stream will receive the finish_reason as 'stop;
        if (part.choices[0].finish_reason === "stop") {
          setConversations((prev) => {
            return [
              ...prev,
              {
                message: streamedMessage,
                isHuman: false,
              },
            ];
          });

          setAiMessage("");
          break;
        } else {
          streamedMessage += part.choices[0].delta.content;
        }
      }
    },
    [userMessage]
  );


 
  return (
    <div className="Chat">
      <Conversation conversations={conversations} aiMessage={aiMessage}/>
      <InputForm userMessage={userMessage} setUserMessage={setUserMessage} handleSubmit={handleSubmit}/>
    </div>
  );
}
