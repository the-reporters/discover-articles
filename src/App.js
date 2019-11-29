import React from "react";
import styled from "@emotion/styled";
import GlobalStyles from "./GlobalStyles";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

//STYLE Start

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
`;

//STYLE End

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Header />
      <Content />
      <Footer />
    </AppContainer>
  );
}

export default App;
