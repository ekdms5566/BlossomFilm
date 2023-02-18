import { createGlobalStyle } from "styled-components";
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
    /*
    모바일 환경에서 100vh 사용시 생기는 스크롤 버그 문제 방지 코드
    사용하고자 하는 페이지 최상당 layout 사이즈  height: calc(var(--vh, 1vh) * 100) 로 설정하여 사용
    */
    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
    setScreenSize();
    window.addEventListener("resize", setScreenSize);

    return (
        <div className="App">
            <GlobalStyle />
        </div>
    );
}

export default App;
