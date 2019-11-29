import React from "react";

export default function Contribute() {
  const [category, setCategory] = React.useState("");
  const [headline, setHeadline] = React.useState("");
  const [paragraph, setParagraph] = React.useState("");
  const [rating, setRating] = React.useState(null);
  const [url, setUrl] = React.useState("");

  async function handeleSubmit(event) {
    event.preventDefault();
    await fetch("http://localhost:3006/results", {
      method: "POST",
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ category, headline, paragraph, rating, url })
    });
    setCategory("");
    setHeadline("");
    setParagraph("");
    setRating(null);
    setUrl("");
  }

  return (
    <form onSubmit={handeleSubmit}>
      <h1>Which article inspires you?</h1>
      <h3>Category?</h3>
      <input
        autoFocus
        type="text"
        value={category}
        onChange={event => setCategory(event.target.value)}
      />
      <h3>Headline</h3>
      <input
        autoFocus
        type="text"
        value={headline}
        onChange={event => setHeadline(event.target.value)}
      />
      <h3>Paragraph</h3>
      <input
        autoFocus
        type="text"
        value={paragraph}
        onChange={event => setParagraph(event.target.value)}
      />
      <h3>Rating</h3>
      <div>
        {[1, 2, 3, 4, 5].map(value => (
          <input
            key={value}
            type="button"
            value={value}
            active={value === rating}
            onClick={() => setRating(value)}
          />
        ))}
      </div>
      <h3>Url</h3>
      <input
        autoFocus
        type="text"
        value={url}
        onChange={event => setUrl(event.target.value)}
      />
      <button>share with other Zenists</button>
    </form>
  );
}
