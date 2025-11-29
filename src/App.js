import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/layout';
import Header from './shared/header/header';
import Footer from './shared/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aboutme from './layout/About-me';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Layout/>}></Route>
          <Route path='/aboutMe' element={<Aboutme />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
