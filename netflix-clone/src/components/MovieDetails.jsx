import { movies } from "../data/movies"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import SingleMovie from "./SingleMovie"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const MovieDetails = () => {
    const [movie, setMovie] = useState(undefined)
    const params = useParams()



    useEffect(() => {
        let movieId = params.movieId
        let movieArr = movies.Search
        console.log(movieArr)
        let movieToShow = movieArr.find(m => m.Search.imdbID === movieId)

        setMovie(movieToShow)
    }, [])

    return (
        <Container>
            <Row>
                <SingleMovie movieObj={movie} />
            </Row>
        </Container>
    )
}

export default MovieDetails