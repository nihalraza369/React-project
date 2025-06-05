import React, { useState, useEffect } from "react";

const App = () => {
  const [html, setHtml] = useState("<h1>Hello</h1>");
  const [css, setCss] = useState("h1 { color: red; }");
  const [js, setJs] = useState("console.log('JS is running')");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <head>
            <style>${css}</style>
          </head>
          <body>
            ${html}
            <script>${js}<\/script>
          </body>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div className="h-screen bg-gray-900 text-white p-4 flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <textarea
          className="p-2 bg-gray-800 rounded h-48 w-full"
          value={html}
          onChange={(e) => setHtml(e.target.value)}
          placeholder="HTML"
        />
        <textarea
          className="p-2 bg-gray-800 rounded h-48 w-full"
          value={css}
          onChange={(e) => setCss(e.target.value)}
          placeholder="CSS"
        />
        <textarea
          className="p-2 bg-gray-800 rounded h-48 w-full"
          value={js}
          onChange={(e) => setJs(e.target.value)}
          placeholder="JavaScript"
        />
      </div>

      <div className="flex-1 border-2 border-gray-700 rounded overflow-hidden">
        <iframe
          srcDoc={srcDoc}
          title="Live Preview"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default App;
