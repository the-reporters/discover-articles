import React from "react";
import styled from "@emotion/styled";

//STYLE start

const ArticleLink = styled.a`
  text-decoration: none;
`;

const ContentContainer = styled.main`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  align-content: center;
  width: 100%;
  flex-basis: 0;
  flex-grow: 1;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
`;

const ArticleContainer = styled.div`
  min-width: 270px;
  max-width: 270px;
  margin: 20px;
  scroll-snap-align: center;
`;

const ArticleParagraph = styled.p`
  font-size: 0.8rem;
  margin: 5px;
  text-align: justify;
`;

const Label = styled.div`
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ff7262;
  font-family: "Baskervville";
  font-size: 0.7rem;
  margin: 5px;
  padding: 5px;
  height: 20px;
  width: 50px;
  color: #fff;
`;

const HeadlineContainer = styled.div`
  width: 100%;
  margin: 5px;
  font-family: "Baskervville";
  font-size: 0.8rem;
  color: black;
  background: whitesmoke;
`;

const Rating = styled.div`
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ff7262;
  font-size: 0.7rem;
  margin: 5px;
  padding: 5px;
  height: 20px;
  width: 50px;
  color: #fff;
`;

//STYLE end

export default function Content() {
  const [content, setContent] = React.useState([]);

  async function fetchContent() {
    const response = await fetch(" http://localhost:3006/results");
    const data = await response.json();
    setContent(data);
    console.log(data);
  }

  React.useEffect(() => {
    fetchContent();
  }, []);

  return (
    <ContentContainer>
      {content.map(article => (
        <ArticleContainer key={article.id}>
          <Label>{article.category}</Label>
          <ArticleLink href={article.url} target={"_blank"}>
            <HeadlineContainer>
              <h1>{article.headline}</h1>
            </HeadlineContainer>
          </ArticleLink>
          <ArticleParagraph>{article.paragraph}</ArticleParagraph>
          <Rating>{article.rating}/5</Rating>
        </ArticleContainer>
      ))}
    </ContentContainer>
  );
}
