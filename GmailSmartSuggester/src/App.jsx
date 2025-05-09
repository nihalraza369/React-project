
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const suggestionsList = {
    "hello": " how are you?",
    "please find": " the attached document.",
    "thanks": " for your time!",
  };

  const handleChange = (e) => {
    const input = e.target.value;
    setText(input);

    // Simple suggestion logic
    const found = Object.keys(suggestionsList).find((key) =>
      input.toLowerCase().endsWith(key)
    );

    if (found) {
      setSuggestion(suggestionsList[found]);
    } else {
      setSuggestion("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Tab" && suggestion) {
      e.preventDefault(); // prevent focus change
      setText((prev) => prev + suggestion);
      setSuggestion("");
    }
  };

  return (
    <div style={{ width: "400px", margin: "50px auto" }}>
      <label style={{color: "purple",fontSize: "30px",fontFamily: "fantasy"}}>✍️ Type your email:</label>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Type something..."
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          marginBottom: "10px",
        }}
      />
      {suggestion && (
        <div style={{ color: "gray", fontStyle: "italic" }}>
          Suggestion: <span style={{ fontWeight: "bold" }}>{suggestion}</span>
        </div>
      )}
    </div>
  );
}

export default App;