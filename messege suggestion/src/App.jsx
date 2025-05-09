import { useState, useRef } from "react";

function App() {
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const inputRef = useRef(null);

  const suggestionsList = {
    "hello": " how are you?",
    "please find": " the attached document.",
    "thanks": " for your time!",
    "i hope": " you are doing well.",
    "who are you": " / I am Nihal Nughman.",
    "what is your name": " / My name is App."
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);

    // Match last few words only
    const found = Object.keys(suggestionsList).find((key) =>
      value.toLowerCase().endsWith(key)
    );

    if (found) {
      setSuggestion(suggestionsList[found]);
    } else {
      setSuggestion("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Tab" && suggestion) {
      e.preventDefault(); // Stop default tabbing
      setText((prev) => prev + suggestion);
      setSuggestion("");
    }
  };

  return (
    <div style={{ width: "600px", margin: "50px auto", fontFamily: "sans-serif" }}>
      <label style={{ fontSize: "18px", marginBottom: "10px", display: "block" }}>
        📩 Write an email message:
       <h1 style={{ color: "purple" ,fontSize: "30px", fontFamily: "fantasy" }}>Write</h1><h3 style={{ color: "purple" ,fontSize: "20px", fontFamily: "revert" }}>"hello,please find,thanks,i hope,who are you,what is your name"</h3>
      </label>

      <div
        style={{
          position: "relative",
          width: "100%",
          fontSize: "18px",
          color: "#333",
        }}
      >
        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "18px",
            boxSizing: "border-box",
            color: "black",
          }}
          placeholder="Type here... (press Tab to autocomplete)"
        />
  {suggestion && (
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: `${text.length * 10.2}px`,
              color: "#aaa",
              pointerEvents: "none",
            }}
          >
            {suggestion}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

