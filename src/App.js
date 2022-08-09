// import logo from './logo.svg';
import './App.css';
import Base from './layout/base/Base';

// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";


// ......................Pages import.....................
import Homepage from './pages/Homepage/Homepage';


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
