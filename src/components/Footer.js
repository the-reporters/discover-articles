import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled.header`
  height: 60px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 -4px 10px 0 rgba(50, 50, 50, 0.25);
`;

const CategoryButton = styled.button`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  font-family: "Baskervville";
  font-size: 0.7rem;
  color: #ff7262;
  &:active {
    color: #333;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <CategoryButton>Business</CategoryButton>
      <CategoryButton>Tech</CategoryButton>
      <CategoryButton>Sports</CategoryButton>
      <CategoryButton>Lifestyle</CategoryButton>
    </FooterContainer>
  );
}
