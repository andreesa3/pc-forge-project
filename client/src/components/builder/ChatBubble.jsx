

export default function ChatBubble({ isHuman, message }) {
  return (
    <div className={`builder-bubble-container ${isHuman ? "builder-human" : "builder-ai"}`} style={{justifyContent: isHuman ? "flex-end" : "flex-start"}}>
      <div className="builder-bubble-content">
        {message}
      </div>
    </div>
  );
}
