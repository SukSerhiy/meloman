import { Routes, Route } from 'react-router';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Home } from './routes/index';
import { Album } from './routes/album';
import { Artist } from './routes/artist'; 
import { ArtistAlbums } from './routes/artist-albums';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/album/:id" element={<Album />} />
      <Route path="/artist/:id" element={<Artist />} />
      <Route path="/artist-albums/:id" element={<ArtistAlbums />} />
    </Routes>
  );
}

export default App;
