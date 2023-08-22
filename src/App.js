import "./App.css";
import { useState } from "react";
import QRCode from "react-qr-code";

function App() {
  const [text, setText] = useState("");
  const textChangeHanlder = (event) => {
    setText(event.target.value);
  };
  return (
    <div className="mainDiv">
      <h1>QR Code Generator</h1>
      <input
        type="text"
        value={text}
        onChange={textChangeHanlder}
        placeholder="Enter you text here to generate QR"
      />
      <div
        style={{
          height: "auto",
          margin: "0 auto",
          maxWidth: 200,
          width: "100%"
        }}
      >
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={text}
          viewBox={`0 0 256 256`}
        />
      </div>
    </div>
  );
}

export default App;
