import Header from "../../Componentes/Header/Header";
import { Outlet } from "react-router-dom";

const home = () => {
  return (
  <main>
    <Header/>
    <Outlet/>
  </main>
  )
}

export default home