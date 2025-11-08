import { useState } from "react";
import "./css/style.css";

function App() {
  const [longUrl, setLongUrl] = useState("");
  const [customCode, setCustomCode] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShortUrl("");
    setMessage("");
    setMessageType("");

    if (!longUrl.trim()) {
      setMessage("Please enter a valid URL.");
      setMessageType("error");
      return;
    }

    setLoading(true);
    try {
      const API_BASE = import.meta.env.VITE_API_BASE_URL;

      const res = await fetch(`${API_BASE}/shorten`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ longUrl, customCode }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || "Server error");
        setMessageType("error");
      } else if (data.message) {
        setMessage(`${data.message}: ${data.shortUrl}`);
        setMessageType("warning");
        setShortUrl(data.shortUrl);
      } else if (data.shortUrl) {
        setMessage("Short URL created!");
        setMessageType("success");
        setShortUrl(data.shortUrl);
      } else {
        setMessage("Unexpected response from server");
        setMessageType("error");
      }
    } catch (err) {
      console.error(err);
      setMessage("Network error — couldn't reach server");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!shortUrl) return;
    try {
      await navigator.clipboard.writeText(shortUrl);
      setMessage("Copied to clipboard!");
      setMessageType("success");
    } catch {
      setMessage("Copy failed, please copy manually.");
      setMessageType("error");
    }
  };

  return (
    <div className="app-wrap">
      <div className="card">
        <div className="header">
          <div className="logo">SL</div>
          <div>
            <h3 className="title">SunLink</h3>
            <p className="subtitle">
              Paste a long URL, get a short one — fast & simple.
            </p>
          </div>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="https://example.com/very/long/url"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />

          <div className="row">
            <input
              className="input-small"
              type="text"
              placeholder="Custom (optional) - e.g. my-link"
              value={customCode}
              onChange={(e) => setCustomCode(e.target.value)}
            />
            <button className="btn" type="submit" disabled={loading}>
              {loading ? "Shortening..." : "Shorten"}
            </button>
            <button
              type="button"
              className="btn-ghost"
              onClick={() => {
                setLongUrl("");
                setCustomCode("");
                setShortUrl("");
                setMessage("");
                setMessageType("");
              }}
            >
              Reset
            </button>
          </div>
        </form>

        {message && (
          <div
            className={`alert ${
              messageType === "success"
                ? "success"
                : messageType === "warning"
                ? "warning"
                : "error"
            }`}
          >
            {message}
          </div>
        )}

        {shortUrl && (
          <div className="result">
            <a
              className="short-link"
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {shortUrl}
            </a>
            <button className="btn-ghost" onClick={handleCopy}>
              Copy
            </button>
          </div>
        )}

        <p className="help" style={{ marginTop: 14 }}>
          Pro tip: Use a short custom alias (letters, numbers, dash). Avoid
          spaces.
        </p>
      </div>
    </div>
  );
}

export default App;
