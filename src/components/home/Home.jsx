

import PropTypes from 'prop-types'
import MovieItem from '../movieItem/MovieItem'


const Home = ({movies}) => {
    
    


    return (
        <div>
            <h1>Seleccione la pelicula</h1>
            <ul>
                {movies.map((m)=>
                        <MovieItem
                            key={m.id}
                           movie={m}
                        />
                )}
              <h3></h3>
            </ul>
        </div>
    )
}

Home.propTypes = {
    movies: PropTypes.array,
}

export default Home