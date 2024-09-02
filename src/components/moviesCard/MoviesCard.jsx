import PropTypes from "prop-types";

const MoviesCard = ({ movie }) => {
  return (
    <div>
      <h1>Película:</h1>
    </div>
  );
};

MoviesCard.propTypes = {
  movie: PropTypes.object,
};

export default MoviesCard;
