import ChatBubble from "./ChatBubble";

export default function Conversations({ conversations, aiMessage }) {
  return (
    <div className="conversation-container">
      <div className=" .messages-container">
        {conversations &&
          conversations.map((conversation, index) => {
            return (
              <ChatBubble
                isHuman={conversation.isHuman}
                message={conversation.message}
                key={index}
              />
            );
          })}
        {aiMessage && <ChatBubble isHuman={false} message={aiMessage} />}
      </div>
    </div>
  );
}