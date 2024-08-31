import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();

  const handleHomeNavigate = () => {
    navigate("/");
  };

  const handleEditFunctionNavigate = () => {
    navigate("/editFunction");
  };

  return (
    <div>
      <Button onClick={handleHomeNavigate}>Inicio</Button>
      <Button onClick={handleEditFunctionNavigate}>Editar Funcion</Button>
    </div>
  )
}

Header.propTypes = {}

export default Header