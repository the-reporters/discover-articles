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
        <Label>Economy</Label>
        <HeadlineContainer>
          <h1>
            In the Global Fight for Economic Dominance, Trade Is the Easy Part
          </h1>
        </HeadlineContainer>
        <ArticleParagraph>
          BEIJING—China held off from retaliating against the U.S. after
          President Trump signed a bill supporting Hong Kong’s anti-Beijing
          protesters, as both sides remained confident they can sign a partial
          trade deal in the coming weeks, officials in the U.S. and China said.
        </ArticleParagraph>
        <Rating>4.5/5</Rating>
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
