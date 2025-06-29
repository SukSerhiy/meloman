import { Routes, Route } from 'react-router';
import { Home } from './routes/index';
import { Album } from './routes/album';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/album/:id" element={<Album />} />
    </Routes>
  );
}

export default App;
