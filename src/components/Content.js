import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

//STYLE start

const ContentContainer = styled.main`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  align-content: center;
  width: 100%;
  flex-basis: 0;
  flex-grow: 1;
  overflow-x: auto;
`;

const ArticleContainer = styled.div`
  min-width: 270px;
  max-width: 270px;
  margin: auto;
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

export default function Content({ category, headline, paragraph, rating }) {
  return (
    <ContentContainer>
      <ArticleContainer>
        <Label>{category}</Label>
        <HeadlineContainer>
          <h1>{headline}</h1>
        </HeadlineContainer>
        <ArticleParagraph>{paragraph}</ArticleParagraph>
        <Rating>{rating}</Rating>
      </ArticleContainer>
    </ContentContainer>
  );
}

Content.propTypes = {
  category: PropTypes.string,
  headline: PropTypes.string,
  paragraph: PropTypes.string,
  rating: PropTypes.number
};
