import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contacto from './components/pages/Contacto';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/Container';

function App() {
  return (
    <Router>
       <div>
        <Link to="/">Home</Link>
         <Link to="/contacto">Contacto</Link>
          <Link to="/company">Empresa</Link>
           <Link to="/newproject">Novo projecto</Link>
        </div>
        <Container customClass="min-height">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/newproject" element={<NewProject />} />
      </Routes>
      </Container>

      <p>Footer</p>
    </Router>
  );
}

export default App;



