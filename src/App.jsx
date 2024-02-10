import { Routes, Route } from 'react-router-dom';
import UnderConstruction from './pages/UnderConstruction';

const App = () => (
  <main>
    <Routes>
      <Route path='/' element={<UnderConstruction />} />
    </Routes>
  </main>
);

export default App;
