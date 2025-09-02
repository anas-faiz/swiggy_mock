import Header from "./components/Header"
import { Outlet} from "react-router-dom"
import { Provider } from "react-redux"
const App = ()=>{
  return <>
  <div className="container">
    <Provider store={}>
      <Header/>
      <Outlet/>
    </Provider>
  </div>
    
  </>
} 



export default App