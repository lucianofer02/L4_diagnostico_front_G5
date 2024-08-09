
import './App.css'
import Home from './components/home/Home'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MoviesCard from './components/moviesCard/MoviesCard';



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:(
        <Home/>
      )
    },
    {
      path:"/MoviesCard",
      element: (
        <MoviesCard/>
      )
    },
    
  ])


  return <RouterProvider router={router} />;
  
}

export default App
