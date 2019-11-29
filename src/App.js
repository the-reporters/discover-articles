import React from "react";
import styled from "@emotion/styled";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Contribute from "./pages/Contribute";

//STYLE Start

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
`;

const ContentContainer = styled.main`
  display: flex;
  flex-flow: row nowrap;
  align-content: center;
  width: 100%;
  flex-basis: 0;
  flex-grow: 1;
  overflow-x: auto;
`;

//STYLE End

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Router>
        <Header />
        <ContentContainer>
          <Switch>
            <Route exact path="/" component={Content} />
            <Route path="/contribute" component={Contribute} />
          </Switch>
        </ContentContainer>
        <Footer />
      </Router>
    </AppContainer>
  );
}

export default App;
