

import MoviesList from '../moviesList/MoviesList'

const Home = () => {

    const Movies = [{
        id:1,
        title: "Inception",
        director: "Christopher Nolan",
        year: 2010,
        genre: "Science Fiction",
        duration: "148 min",
        showtimes: ["14:00", "17:30", "21:00"],
        imageUrl: "x"
    },
    {
        id:2,
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        year: 1994,
        genre: "Drama",
        duration: "142 min",
        showtimes: ["12:00", "16:00", "19:30"],
        imageUrl:"x",
    },
    {
        id:3,
        title: "The Godfather",
        director: "Francis Ford Coppola",
        year: 1972,
        genre: "Crime, Drama",
        duration: "175 min",
        showtimes: ["13:00", "18:00", "22:00"],
        imageUrl:"x"
    },
    {
        id:4,
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        year: 1994,
        genre: "Crime, Drama",
        duration: "154 min",
        showtimes: ["15:00", "19:00", "23:00"],
        imageUrl:"x"
    },
    {
        id:5,
        title: "The Dark Knight",
        director: "Christopher Nolan",
        year: 2008,
        genre: "Action, Crime, Drama",
        duration: "152 min",
        showtimes: ["13:30", "17:00", "20:30"],
        imageUrl:"x"
    }]



    return (
        <div>
            <h1>Seleccione la pelicula</h1>
            <ul>
                {Movies.map((m)=>
                        <MoviesList
                            key={m.id}
                           title={m.title}
                           director={m.director}
                           year={m.year}
                           genre={m.genre}
                           duration={m.duration}
                           showtimes={m.showtimes} 
                           imageUrl={m.imageUrl}
                        />
                )}
            </ul>
        </div>
    )
}

Home.propTypes = {}

export default Home