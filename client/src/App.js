import { createGlobalStyle } from "styled-components";
import Home from "./components/Home";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  body {
    text-align: center;
    margin: 0 auto;
    max-width: 479px;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;
