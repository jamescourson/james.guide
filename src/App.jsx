import { Routes, Route } from 'react-router-dom';
import UnderConstruction from './pages/UnderConstruction';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

const App = () => (
  <>
    <Header />

    <main>
      <Routes>
        <Route path='/' element={<UnderConstruction />} />
      </Routes>
    </main>

    <Footer />
  </>
);

export default App;
