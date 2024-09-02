import { useReducer, useState, useSyncExternalStore } from 'react'
import PropTypes from 'prop-types'
import Table from 'react-bootstrap/Table';
import { Button, Col, Form, FormControl, Row, } from 'react-bootstrap';

const initialFunction = {
  id: 0,
  date: "00:00",
  price: 0,
  formValid: false

};
const functioFormReducer = (state, action) => {
  switch (action.type) {
    case "DATE_UPDATE":
      return {
        ...state,
        date: action.value,
        formValid:
          action.value && state.price,
      };
    case "PRICE_UPDATE":
      return {
        ...state,
        price: action.value,
        formValid:
          action.value && state.date,
      };
    case "RESET_FORM":
      return {
        ...initialFunction,
        formValid: false,
      };
    default:
      return state;

  }
}

const EditFunction = ({ movies, onFunctionDataSaved, onUpdateData}) => {

  const [movieSelected, setMovieSelected] = useState(null)
  const [functionSelected, setFunctionSelected] = useState(null)
  const [showFormAdd, setShowFormAdd] = useState(false)
  const [showFormUpdate, setShowFormUpdate] = useState(false)
  const [newDate, setNewDate] = useState("")
  const [newPrice, setNewPrice] = useState("")

  //-----Update Function----
  const submitNewData = (e) => {
    e.preventDefault();
    onUpdateData(newDate, newPrice, functionSelected, movieSelected)
    setNewDate("");
    setNewPrice("");
    setShowFormUpdate(false);
  };

  const handleShowFormUpdate = (f) => {
    setShowFormUpdate(true)
    setFunctionSelected(f)
  }

  const handleNewDate = (e) => {
    setNewDate(e.target.value)
    console.log("fecha", e.target.value)
  }

  const handleNewPrice = (e) => {
    setNewPrice(e.target.value)
    console.log("precio", e.target.value)
  }
  //------------------------

  //------Add Function------
  const [functionForm, dispatch] = useReducer(
    functioFormReducer,
    initialFunction);

  const handleChangeDate = (e) => {
    dispatch({
      type: "DATE_UPDATE",
      value: e.target.value,
    });
  };

  const handleChangePrice = (e) => {
    dispatch({
      type: "PRICE_UPDATE",
      value: e.target.value
    })
  };

  const sumbitFunctionHandler = (e) => {
    e.preventDefault();
    const functionData = {
      functionDate: functionForm.date,
      functionPrice: functionForm.price,
      functionMovieId: movieSelected.id
    };
    onFunctionDataSaved(functionData);
    dispatch({
      type: "RESET_FORM",
    })

    setShowFormAdd(false)
  }

  const handleChangeShowForm = () => {
    setShowFormAdd(!showFormAdd)
  }

  const handleSelectedChange = (e) => {
    const x = e.target.value
    console.log("x", x)
    const selectedMovie = movies.find((m) => m.id == x);
    setMovieSelected(selectedMovie || null);
    console.log(selectedMovie)
  };
  //----------------------


  return (
    <div>
      <Form.Group>
        <Form.Label>Selecione la pelicula</Form.Label>
        <Form.Select onChange={(e) => handleSelectedChange(e)} >

          {movies.map((m) => (
            <option key={m.id} value={m.id} >{m.title}</option>
          ))}
        </Form.Select>
      </Form.Group>

      {movieSelected && movieSelected.functions && movieSelected.functions.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Funciones</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {movieSelected.functions.map((f) => (
              <tr key={f.id}>
                <td>{f.date}</td>

                <td>{showFormUpdate ? 
                  (<Form onSubmit={submitNewData}>
                    <Form.Label>Nuevo Horario</Form.Label>
                    <Form.Control
                    type='datetime-local'
                    value={newDate}
                    onChange={handleNewDate}></Form.Control>
                    <Form.Label>Nuevo Precio</Form.Label>
                    <Form.Control
                    type='number'
                    value={newPrice}
                    onChange={handleNewPrice}></Form.Control>
                    <Button type='submit' variant='success'>Aceptar</Button>
                  </Form>
                  ) :
                  (<Button style={{ backgroundColor: 'orange', borderColor: 'orange'}} onClick={() => handleShowFormUpdate(f)}>Editar</Button>)
                  }
                  
                </td>
                <td>
                  <Button variant='danger'>Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>

        </Table>) :
        (<h1>No hay funciones disponibles</h1>)
      }
      {showFormAdd ? (
        <Form onSubmit={sumbitFunctionHandler}>
           <Row className="justify-content-end">
            <Col md={6}>
              <Form.Group controlId="functionDate">
                <Form.Label>Horario</Form.Label>
                <Form.Control
                  type="datetime-local"
                  onChange={handleChangeDate}
                  value={functionForm.date}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="functionPrice">
                <Form.Label>Precio</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ingrese el precio"
                  onChange={handleChangePrice}
                  value={functionForm.price}
                />
              </Form.Group>
            </Col>
          </Row>
          <Button 
          variant='success' 
          type="sumbit"
          disabled={!functionForm.formValid} >
            Agregar Funcion
          </Button>
        </Form>
      ) : (
        <Button variant='primary' onClick={handleChangeShowForm}>
          Agregar Funcion
        </Button>)}
    </div>
  );
}

EditFunction.propTypes = {
  movies: PropTypes.array.isRequired,
  onFunctionDataSaved: PropTypes.func.isRequired,
  onUpdateData: PropTypes.func.isRequired
}

export default EditFunction