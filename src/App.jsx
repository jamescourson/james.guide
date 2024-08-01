import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Journal from './pages/Journal';
import Directory from './pages/Directory/Directory';

import './App.css';

const App = () => (
  <>
    <Header />

    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/a' element={<About />} />
        <Route path='/d' element={<Directory />} />
        <Route path='/j' element={<Journal />} />
      </Routes>
    </main>

    <Footer />
  </>
);

export default App;
