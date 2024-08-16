
import './App.css'
import Home from './components/home/Home'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MoviesCard from './components/moviesCard/MoviesCard';

const Movies = [{
  
    id: 1,
    title: "El secreto de sus ojos",
    director: "Juan José Campanella",
    duration: "129 min",
    showtimesDay:["16/08/24","14/08/24"],
    showtimes: ["14:00", "18:00", "21:00"],
    imageUrl: "https://example.com/el-secreto-de-sus-ojos.jpg",
    isNational: true 
  },
  {
    id: 2,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    duration: "152 min",
    showtimesDay:["16/08/24","14/08/24"],
    showtimes: ["13:30", "17:00", "20:30"],
    imageUrl: "https://example.com/dark-knight.jpg",
    isNational: false 
  }
  
]


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:(
        <Home movies={Movies}/>
      )
    },
    {
      path:"/MoviesCard",
      element: (
        <MoviesCard />
      )
    },
    
  ])


  return <RouterProvider router={router} />;
  
}

export default App
