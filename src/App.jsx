
import './App.css'
import Home from './components/home/Home'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from './components/layout/MainLayout';
import EditFunction from './components/editFunction/EditFunction';
import { useEffect, useState } from 'react';


function App() {

  const [movies, setMovies] = useState([])
  const [reload, setReload] = useState(false)

    useEffect(() => {
        fetch("https://localhost:7156/api/movie", {
          method: "GET",
          mode: "cors",
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error al obtener las pelis");
            }
            return response.json();
          })
          .then((moviesData) => {
            console.log(moviesData);
            setMovies(moviesData);
          })
          .catch((error) => {
            console.error("Error", error);
          });
      }, [reload]);

      
  const saveFunctionDataHandler = async (enteredFunctionData) => {
    const functionDto = {
      Date: enteredFunctionData.functionDate,
      Price:Number(enteredFunctionData.functionPrice),
      MovieId: enteredFunctionData.functionMovieId,
    };

    try {
      const response = await fetch("https://localhost:7156/api/function", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(functionDto),
      });

      if (!response.ok) {
        throw new Error("Error al agregar funcion");
      } else {
        console.log("Funcion Agregado");
      }

      const data = await response.json();
      console.log(data);
      
    } catch (error) {
      alert(error);
    }
    setReload(!reload);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element:(
        <MainLayout>
        <Home movies={movies}/>
        </MainLayout>
      )
    },
    {
      path:"/EditFunction",
      element: (
        <MainLayout>
          <EditFunction movies={movies}
            onFunctionDataSaved={saveFunctionDataHandler}
          />
        </MainLayout>
      )
    },
    
  ])


  return <RouterProvider router={router} />;
  
}

export default App
