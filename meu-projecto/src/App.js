import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contacto from './components/pages/Contacto';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navba';
import Projects from './components/pages/Projects';


function App() {
  return (
    <Router>
    <Navbar/>
        <Container customClass="min-height">
      <Routes>
        <Route path="/" element={<Home/>} />
         <Route path="/Company" element={<Company />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/newproject" element={<NewProject />} />
      </Routes>
      </Container>
  
      <Footer/>
    </Router>
  );
}

export default App;



