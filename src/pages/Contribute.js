import React from "react";
import styled from "@emotion/styled";

//STYLE start

const ContributionContainer = styled.div`
  width: 90%;
  margin: auto;
`;

const ContributionForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
`;

const ContributionHeadline = styled.h1`
  font-family: "Baskervville";
  font-size: 1.5rem;
  color: black;
`;

const InformationLabel = styled.label`
  background: #fff;
  display: flex;
  flex-flow: column nowrap;
  width: 90%;
  margin: 5px;
  font-size: 14px;
  background: whitesmoke;
  font-weight: bold;
  * {
    font-size: 14px;
    background: whitesmoke;
  }
`;

const ShareButton = styled.button`
  background: #ff7262;
  width: 100px;
  height: 50px;
  color: white;
`;

//STYLE end

export default function Contribute() {
  const [category, setCategory] = React.useState("");
  const [headline, setHeadline] = React.useState("");
  const [paragraph, setParagraph] = React.useState("");
  const [rating, setRating] = React.useState(null);
  const [url, setUrl] = React.useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    await fetch("http://localhost:3006/results", {
      method: "POST",
      headers: {
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
    <ContributionContainer>
      <ContributionForm onSubmit={handleSubmit}>
        <ContributionHeadline>Which article inspires you?</ContributionHeadline>
        <InformationLabel>
          Headline
          <input
            placeholder="e.g. Worldpeace has been acquired"
            type="text"
            value={headline}
            onChange={event => setHeadline(event.target.value)}
          />
        </InformationLabel>
        <InformationLabel>
          Category
          <select
            value={category}
            onChange={event => setCategory(event.target.value)}
          >
            <option value="">choose category</option>
            <option value="economy">Economy</option>
            <option value="tech">Tech</option>
            <option value="sport">Sports</option>
            <option value="lifestyle">Lifestyle</option>
          </select>
        </InformationLabel>
        <InformationLabel>
          Paragraph
          <textarea
            placeholder="Please provide the first paragraph of the article here"
            type="text"
            rows="5"
            value={paragraph}
            onChange={event => setParagraph(event.target.value)}
          />
        </InformationLabel>
        <InformationLabel>
          Rating
          {[1, 2, 3, 4, 5].map(value => (
            <input
              key={value}
              type="button"
              value={value}
              onClick={() => setRating(value)}
            />
          ))}
        </InformationLabel>
        <InformationLabel>
          Url
          <input
            placeholder="please provide a valid URL to the article"
            type="url"
            value={url}
            onChange={event => setUrl(event.target.value)}
          />
        </InformationLabel>
        <ShareButton>share with other Zenists</ShareButton>
      </ContributionForm>
    </ContributionContainer>
  );
}
