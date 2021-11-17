import { movies } from "../data/movies"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const MovieDetails = () => {

    const fetchMovieDetails = async (movieId) => {
        try {
            const response = await fetch(`http://www.omdbapi.com/?apikey=${ process.env.REACT_APP_API_KEY }&i=${ movieId }`)

            if (response.ok) {
                const movieDetails = await response.json()
                // console.log(movieDetails)
                return movieDetails
            } else {
                console.log('ERROR!')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const [movie, setMovie] = useState(undefined)
    const params = useParams()



    useEffect(() => {
        let movieId = params.movieId
        let movieToShow = fetchMovieDetails(movieId)
        // console.log(movieId)
        setMovie(movieToShow)
        console.log(movieToShow)
    }, [])

    return (
        <Container>
            <Row>
                <Col className="movie-poster col-6 col-md-3 col-lg-2">
                    {/* <img src={movie.Poster} alt={movie.Title + "poster image"} />
                    <h2>{movie.Title}</h2> */}
                </Col>
            </Row>
        </Container>
    )
}

export default MovieDetails