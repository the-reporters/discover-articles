import React from "react";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contentlist from "./pages/Conentlist";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <main>
        <Contentlist />
      </main>
      <Footer />
    </div>
  );
}

export default App;
