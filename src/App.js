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
import Login from './jsx/pages/login/login';
import BossInfo from './jsx/pages/bossInfo/bossInfo';
import About from './jsx/pages/about/About';
import FAQEn from './jsx/pages/FAQ/FAQEn';
// Not Found 404 page
import NotFound from './jsx/pages/NotFound/NotFound';
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
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/bossinfo" element={<BossInfo></BossInfo>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/faq/en" element={<FAQEn></FAQEn>}></Route>
            {/* Not Found 404 page */}
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </Base>
      </BrowserRouter>
    </div>
  )
}
export default App;
