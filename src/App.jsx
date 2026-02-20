import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PartPage from './pages/PartPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topic/:partNum" element={<PartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
