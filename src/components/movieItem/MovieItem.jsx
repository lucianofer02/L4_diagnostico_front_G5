
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'
import MoviesCard from '../moviesCard/MoviesCard';


const MovieItem = ({ movie }) => {
    const [showCard, setShowCard] = useState(false);


    const handleShowCard = () => {
        setShowCard(!showCard)

    }

    return (
        <div>
            {showCard ? (
                <div>
                    <MoviesCard movie={movie} />
                    <Button onClick={handleShowCard}>vOlVEr</Button>
                </div>
            ) : (
                <Card className='card_group'>
                    <Card.Body>

                        <Row>
                            <Col md={6}>
                                <Card.Img variant="top" src={movie.imageUrl} height={200} width={250} />
                            </Col>
                            <Col md={6}>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Footer>
                                    <Button variant='outline-dark' onClick={handleShowCard} >Selccionar funcion</Button>
                                </Card.Footer>

                            </Col>
                        </Row>
                    </Card.Body>
                </Card>)

            }
        </div>
    )
}

MovieItem.propTypes = {
    movie: PropTypes.object
}

export default MovieItem