import './scss/App.css';
import './css/fork_helper.css';
import Base from './jsx/layout/base/Base';

// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";


// ......................Pages import.....................
import Homepage from './jsx/pages/homepage/Homepage'
import ForCompanies from './jsx/pages/for_companies/for_companies';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Base>
          <Routes>
            <Route path="/" element={<Homepage></Homepage>}></Route>
            <Route path="/for-companies" element={<ForCompanies></ForCompanies>}></Route>
          </Routes>
        </Base>
      </BrowserRouter>
    </div>
  );
}

export default App;
