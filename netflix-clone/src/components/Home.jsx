import MoviesCarousel from './MoviesCarousel'
import SearchForm from "./SearchForm"


const Home = () => {
    return (
        <>
            <SearchForm />
            <MoviesCarousel galleryTitle="Action" query="mission" />
            <MoviesCarousel galleryTitle="Fantasy" query="harry" />
            <MoviesCarousel galleryTitle="Drama" query="game of thrones" />
        </>
    )
}

export default Home