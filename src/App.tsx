import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import Dineout from "./components/About"
import { createBrowserRouter, Outlet } from "react-router-dom"
const App = ()=>{
  return <>
  <div className="container">
    <Header/>
    <Outlet/>
  </div>
    
  </>
} 

const Routes = createBrowserRouter([
  {
    path:"/",
    element:  <Body/>
  },
  {
    path:"/about",
    element: <About/>
  },
  {
    path:"/dineout",
    element: <Dineout/>
  }
])
export default App