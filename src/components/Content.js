import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

export default function Content({ category, headline, paragraph, rating }) {
  retrun(
    <div>
      <h6>{category}</h6>
      <h3>{headline}</h3>
      <p>{paragraph}</p>
      <div>{rating}</div>
    </div>
  );
}

Content.propTypes = {
  category: PropTypes.string,
  headline: PropTypes.string,
  paragraph: PropTypes.string,
  rating: PropTypes.number
};
