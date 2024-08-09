
import PropTypes from 'prop-types'
import { Card,Row,Col, Button } from 'react-bootstrap'

const MoviesList = ({ title, director, year, genre, duration, showtimes, imageUrl }) => {
    return (
        <div>
            <Card className='card_group'>
                <Card.Body>
                    <Row>
                        <Col md={6}>
                            <Card.Img variant="top" src={imageUrl} height={200} width={250} />
                        </Col>
                        <Col md={6}>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{duration}</Card.Text>
                            <Card.Text>{genre}</Card.Text>
                            <Card.Footer>
                                <Button variant='outline-dark' >Selccionar funcion</Button>
                            </Card.Footer>

                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

MoviesList.propTypes = {
    title: PropTypes.string,
    director: PropTypes.string,
    year: PropTypes.number,
    genre: PropTypes.string,
    duration: PropTypes.string,
    showtimes: PropTypes.array,
    imageUrl: PropTypes.string,
}

export default MoviesList