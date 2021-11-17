import SearchForm from './SearchForm'
import MoviesCarousel from './MoviesCarousel'

const TVShows = () => {
    return (
        <>
            <SearchForm />
            <MoviesCarousel galleryTitle="Your Favourite TV Shows" query="murder" />
        </>

    )
}

export default TVShows