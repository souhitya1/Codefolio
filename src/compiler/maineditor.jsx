import { useEffect, useState } from "react";
import Editor from "./editor";

export default function Maineditor() {
  const [html, sethtml] = useState("");
  const [css, setcss] = useState("");
  const [js, setjs] = useState("");
  const [srcdoc, setsrcdoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setsrcdoc(`
        <html>
        <head><style>${css}</style></head>
        <body>
            ${html}
            <script>${js}</script>
        </body>
        </html>
      `);
    }, 300);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div style={{
      background: "#0d1117",
      Height: "100vh",
      padding: "40px 0"
    }}>
      
      {/* Editors wrapper */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {/* HTML Editor Card */}
        <div
          style={{
            backgroundColor: "#161b22",
            padding: "15px",
            borderRadius: "12px",
            boxShadow: "0 0 20px rgba(0,0,0,0.5)",
            width: "400px",
            height: "320px",
            border: "1px solid #30363d",
          }}
        >
          <h3 style={{ color: "#58a6ff", marginBottom: "10px" }}>HTML</h3>
          <Editor language="html" value={html} onChange={sethtml} />
        </div>

        {/* CSS Editor Card */}
        <div
          style={{
            backgroundColor: "#161b22",
            padding: "15px",
            borderRadius: "12px",
            boxShadow: "0 0 20px rgba(0,0,0,0.5)",
            width: "400px",
            height: "320px",
            border: "1px solid #30363d",
          }}
        >
          <h3 style={{ color: "#58a6ff", marginBottom: "10px" }}>CSS</h3>
          <Editor language="css" value={css} onChange={setcss} />
        </div>

        {/* JS Editor Card */}
        <div
          style={{
            backgroundColor: "#161b22",
            padding: "15px",
            borderRadius: "12px",
            boxShadow: "0 0 20px rgba(0,0,0,0.5)",
            width: "400px",
            height: "320px",
            border: "1px solid #30363d",
          }}
        >
          <h3 style={{ color: "#58a6ff", marginBottom: "10px" }}>JavaScript</h3>
          <Editor language="javascript" value={js} onChange={setjs} />
        </div>
      </div>

      {/* Output IFrame */}
      <div
        style={{
          width: "80%",
          margin: "30px auto",
          background: "white",
          borderRadius: "12px",
          border: "4px solid #b7791f",
          overflow: "hidden",
          boxShadow: "0 0 25px rgba(0,0,0,0.4)",
        }}
      >
        <h3
          style={{
            margin: 0,
            padding: "10px",
            background: "#b7791f",
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Output Preview
        </h3>

        <iframe
          srcDoc={srcdoc}
          sandbox="allow-scripts"
          title="output"
          height="300px"
          width="100%"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </div>
  );
}
