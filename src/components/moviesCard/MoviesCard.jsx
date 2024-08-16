import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import { Card, } from 'react-bootstrap';

const MoviesCard = () => {
  const location = useLocation();
  const { title,showtimesDay,   imageUrl,showtimes,director} = location.state

  return (
    <div>
      


    </div>
  )
}

MoviesCard.propTypes = {
  movies: PropTypes.array
}

export default MoviesCard