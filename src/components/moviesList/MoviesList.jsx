
import PropTypes from 'prop-types'
import { Card,Row,Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const MoviesList = ({ title,showtimesDay, imageUrl,showtimes,director }) => {
    const navigate = useNavigate();

    const handleCardNavigation = () =>{
        navigate("moviesCard",{
          state:{  title,showtimesDay,  imageUrl,showtimes,director}
        })
    }

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
                            <Card.Footer>
                                <Button variant='outline-dark' onClick={handleCardNavigation} >Selccionar funcion</Button>
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
    showtimesDay: PropTypes.array,
    showtimes: PropTypes.array,
    imageUrl: PropTypes.string,
}

export default MoviesList