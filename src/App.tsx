import { Routes, Route } from 'react-router';
import { Home } from './routes/index';
import { Album } from './routes/album';
import { Artist } from './routes/artist'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/album/:id" element={<Album />} />
      <Route path="/artist/:id" element={<Artist />} />
    </Routes>
  );
}

export default App;
