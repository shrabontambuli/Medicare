import { Outlet } from "react-router-dom"
import Header from "./Components/Header/Header"

function App() {

  return (
    <>
      <div className="container mx-auto">
        <Header />
        <Outlet/>
      </div>
    </>
  )
}

export default App
