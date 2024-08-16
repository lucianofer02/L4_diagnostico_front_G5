

import PropTypes from 'prop-types'
import MoviesList from '../moviesList/MoviesList'

const Home = ({movies}) => {

    


    return (
        <div>
            <h1>Seleccione la pelicula</h1>
            <ul>
                {movies.map((m)=>
                        <MoviesList
                            key={m.id}
                           title={m.title}
                           director={m.director}
                           showtimesDay={m.showtimesDay}                       
                           showtimes={m.showtimes} 
                           imageUrl={m.imageUrl}
                        />
                )}
            </ul>
        </div>
    )
}

Home.propTypes = {
    movies: PropTypes.array,
}

export default Home