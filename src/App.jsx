import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Directory from './pages/Directory';

import './App.css';

const App = () => (
  <>
    <Header />

    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/a' element={<About />}></Route>
        <Route path='/b' element={<Blog />} />
        <Route path='/d' element={<Directory />}></Route>
        
      </Routes>
    </main>

    <Footer />
  </>
);

export default App;
