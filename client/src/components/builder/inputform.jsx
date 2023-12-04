

export default function InputForm({ userMessage, setUserMessage, handleSubmit }) {
  return (
    <form className="builder-input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Chiedimi qualcosa"
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
        className="builder-input-field"
      />
      <button type="submit" className="builder-submit-button">
        Invio
      </button>
    </form>
  );
}