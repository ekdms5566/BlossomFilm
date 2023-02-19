import { createGlobalStyle } from 'styled-components'
import Myframe from './components/frame/Editframe';
import Editframe from './components/frame/Editframe';
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Uploadimg from './components/frame/Uploadimg';
import Button from './components/Button';
import Root from './Router/Root';


const GlobalStyle = createGlobalStyle`
  body {
    text-align: center;
    margin: 0 auto;
    max-width: 479px;
  }
`
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  }, 
  {
    path: "/editframe",
    element: <Editframe/>,
  },
  {
    path: "/Uploadimg",
    element: <Uploadimg/>, 
  }
]);

function App() {
  return (
    <div className="App">
      <GlobalStyle /> 
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
