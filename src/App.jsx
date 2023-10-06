import { Outlet } from "react-router-dom"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"

function App() {

  return (
    <>
      <div className="container mx-auto">
        <Header />
        <Outlet/>
        <Footer/>
      </div>
    </>
  )
}

export default App
