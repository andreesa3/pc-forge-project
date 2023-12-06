import React, { useState, useRef, useEffect, useCallback } from "react";
import { openai } from "./openai";
import InputForm from "./inputform";
import Conversation from "./Conversation";

export default function Chat() {
  const [conversations, setConversations] = useState([]);
  const [aiMessage, setAiMessage] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const chatContainerRef = useRef(null);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      setConversations((prev) => [
        ...prev,
        {
          message: userMessage,
          isHuman: true,
        },
      ]);

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
          setConversations((prev) => [
            ...prev,
            {
              message: streamedMessage,
              isHuman: false,
            },
          ]);

          setAiMessage("");
          break;
        } else {
          streamedMessage += part.choices[0].delta.content;
        }
      }
    },
    [userMessage]
  );

  useEffect(() => {
    //Aggiunto per far scorrere la chat automaticamente
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [conversations, aiMessage]);

  return (
    <div className="Chat" ref={chatContainerRef}>
      <Conversation conversations={conversations} aiMessage={aiMessage} />
      <InputForm
        userMessage={userMessage}
        setUserMessage={setUserMessage}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
