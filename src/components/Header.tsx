import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

const Header = ()=>{
  const [loginLogout,setLoginLogout] = useState(true)

  const action = ()=>{
     setLoginLogout(!loginLogout)
  }
    const app_logo = import.meta.env.VITE_LOGO;
  return (
    <div className="header">
      <div className="logo">
        <img src={app_logo} alt="logo" />
        <h1>Brocelle</h1>
      </div>
      <div className="links">
        <Link to = "/"><h1> Home </h1></Link>
        <Link to = "/dineout"><h1>Dineout</h1></Link>
        <Link to= "/about"><h1>About</h1></Link>
          <Link><h1><CiShoppingCart size={50}/></h1></Link>
        <button onClick={action}>{loginLogout ? "login" : "logout"}</button>
      </div>
    </div>
  )
}

export default Header