import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { CutStore } from "./context/Context";
import Home from "./pages/Home";
import SelectCut from "./pages/Select/SelectCut";
import SelectFrame from "./pages/Select/SelectFrame";
import SelectFrameType from "./pages/Select/SelectFrameType";

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
      <BrowserRouter>
        <div className="App">
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/selectCut" element={<SelectCut />} />
            <Route path={"/selectFrame"} element={<SelectFrame />} />
            <Route path="/selectFrametype" element={<SelectFrameType />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CutStore>
  );
}

export default App;
