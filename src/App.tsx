import Header from "./components/Header"
import { Outlet} from "react-router-dom"
import { Provider } from "react-redux";
import AppStore from "./store/AppStore.jsx";
const App = ()=>{
  return <>
  <div className="container">
    <Provider store={AppStore}>
      <Header/>
      <Outlet/>
    </Provider>
  </div>
    
  </>
} 



export default App