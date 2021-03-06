import React from "react";
import "./App.css";
import { Logo } from "./Logo";

const onSubmit = e => {
  e.preventDefault();
  const url = document.getElementById("url").value;

  if (url) {
    const u = new URL(url);
    const id = u.searchParams.get("v");

    if (id) {
      window.location.href = `https://www.youtube.com/embed/${id}`;
    }
  }
};

function App() {
  return (
    <div className="App">
      <Logo />
      <form onSubmit={onSubmit} autoComplete="off">
        <h4>
          Enter the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://support.google.com/youtube/answer/2802167?hl=en"
          >
            age restricted
          </a>{" "}
          YouTube URL below
        </h4>
        <input
          className="shadowed"
          type="url"
          id="url"
          pattern="https://.*"
          size="50"
          required
          autoFocus
          placeholder="https://www.youtube.com/watch?v=PzmFJRRxa7I"
        />
        <button className="primary shadowed" type="submit">
          Bypass
        </button>
      </form>
      <p>
        Time pass stuff by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/ganapativs"
        >
          @ganapativs
        </a>{" "}
        | Source code:{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ganapativs/bypass-yt"
        >
          bypass-yt
        </a>
      </p>
    </div>
  );
}

export default App;
