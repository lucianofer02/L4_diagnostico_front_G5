import Header from "../header/Header"

const MainLayout = ({children}) => {
  return (
    <div>
        <Header/>
        {children}

    </div>
  )
}

MainLayout.propTypes = {}

export default MainLayout