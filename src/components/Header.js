import React from "react";
import styled from "@emotion/styled";
import logo from "../assets/Logo.png";

const HeaderContainer = styled.header`
  height: 60px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 10px 0 rgba(50, 50, 50, 0.25);
`;

const Logo = styled.img`
  height: 80%;
  margin: 20px;
`;

const NewArticle = styled.h3`
  font-family: "Baskervville";
  font-size: 0.8rem;
  margin: 20px;
  color: #ff7262;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <NewArticle>Contribute</NewArticle>
      <Logo src={logo} />
    </HeaderContainer>
  );
}
