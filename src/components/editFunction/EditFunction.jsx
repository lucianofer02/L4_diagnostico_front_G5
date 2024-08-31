import { useReducer, useState } from 'react'
import PropTypes from 'prop-types'
import Table from 'react-bootstrap/Table';
import { Button, Col, Form, Row, } from 'react-bootstrap';

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

const EditFunction = ({ movies, onFunctionDataSaved}) => {

  const [movieSelected, setMovieSelected] = useState(null)
  const [showFormAdd, setShowFormAdd] = useState(false)
  const [showFormUpdate, setShowFormUpdate] = useState(false)

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

                <td>
                  <Button style={{ backgroundColor: 'orange', borderColor: 'orange' }}>Editar</Button>
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
  onFunctionDataSaved: PropTypes.func.isRequired
}

export default EditFunction