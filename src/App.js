import './scss/App.css';
import './css/fork_helper.css';
import Base from './jsx/layout/base/Base';

// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";


// ......................Pages import.....................
import Homepage from './jsx/pages/homepage/Homepage'
import ForCompanies from './jsx/pages/for_companies/for_companies';
import ForInvestors from './jsx/pages/ForInvestors/ForInvestors';
import OurProducts from './jsx/pages/OurProducts/OurProducts';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Base>
          <Routes>
            <Route path="/" element={<Homepage></Homepage>}></Route>
            <Route path="/for-companies" element={<ForCompanies></ForCompanies>}></Route>
            <Route path="/for-investors" element={<ForInvestors></ForInvestors>}></Route>
            <Route path="/our-products/brokerbot" element={<OurProducts></OurProducts>}></Route>
          </Routes>
        </Base>
      </BrowserRouter>
    </div>
  );
}

export default App;
