import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import '../componentStyles/MoviesCarousel.css'

const SingleMovie = ({ movieObj }) => {
    return (
        <Col className="movie-poster col-6 col-md-3 col-lg-2">
            <Link to={"/movie-details/" + movieObj.imdbID}>
                <img src={movieObj.Poster} alt={movieObj.Title + "poster image"} />
            </Link>
        </Col>
    )
}



export default SingleMovie;
