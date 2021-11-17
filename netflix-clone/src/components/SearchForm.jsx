import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Container from 'react-bootstrap/Container'
import MoviesCarousel from './MoviesCarousel'


const SearchForm = () => {
    const [query, setQuery] = useState("");
    return (
        <>
            <Container>
                <Form className="d-flex mr-3 w-100">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </Form>
            </Container>
            {query && <MoviesCarousel galleryTitle="Search" query={query} />}
        </>
    )
}

export default SearchForm