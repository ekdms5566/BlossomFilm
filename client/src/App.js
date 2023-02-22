import { createGlobalStyle } from "styled-components";
import { CutStore } from "./context/Context";

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
    <CutStore>
      <div className="App">
        <GlobalStyle />
        {/* <h1>Test2</h1> */}
      </div>
    </CutStore>
  );
}

export default App;
