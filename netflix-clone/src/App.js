import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from './components/Home'
import TVShows from './components/TVShows'
import NotFound from "./components/NotFound";
import MovieDetails from './components/MovieDetails'
import Registration from "./components/Registration";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;