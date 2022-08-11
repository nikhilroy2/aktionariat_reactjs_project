import './scss/App.css';
import './css/fork_helper.css';
import Base from './jsx/layout/base/Base';

// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";


// ......................Pages import.....................
import Homepage from './jsx/pages/homepage/Homepage'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Base> <Homepage></Homepage></Base>
          }></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
