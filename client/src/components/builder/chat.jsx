import { useState } from "react";
import { openai } from "./openai";
import InputForm from "./inputform";
import Conversation from "./Conversation";
import { useCallback } from "react";

export default function Chat() {
  const [conversations, setConversations] = useState([]);
  const [aiMessage, setAiMessage] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      setConversations((prev) => {
        return [
          ...prev,
          {
            message: userMessage,
            isHuman: true,
          },
        ];
      });
      setUserMessage("");

      const stream = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userMessage }],
        stream: true,
      });

      let streamedMessage = "";

      for await (const part of stream) {
        setAiMessage((prev) => prev + part.choices[0].delta.content);

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
      <Conversation conversations={conversations} aiMessage={aiMessage} />
      <InputForm
        userMessage={userMessage}
        setUserMessage={setUserMessage}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
