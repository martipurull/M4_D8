import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'

const NotFound = () => {
    return (
        <Container className="my-5">
            <Alert variant="danger" > 404 – You know the drill: unfortunately, we couldn't find the page you are looking for.</Alert>
        </Container>
    )
}

export default NotFound