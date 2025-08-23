import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

const Header = ()=>{
  const [loginLogout,setLoginLogout] = useState(true)

  const action = ()=>{
     setLoginLogout(!loginLogout)
  }

  return (
    <div className="header">
      <div className="logo">
        <img src="https://template.canva.com/EAGMppVJ_aY/1/0/1600w-S2LGeYCK5eM.jpg" alt="logo" />
        <h1>Brocelle</h1>
      </div>
      <div className="links">
        <h1><Link to = "/"> Home </Link></h1>
        <h1 ><Link to = "/dineout">Dineout</Link></h1>
          <Link to= "/about"><h1>About</h1></Link>
        <h1 className="cart"><CiShoppingCart size={50}/></h1>
        <button onClick={action}>{loginLogout ? "login" : "logout"}</button>
      </div>
    </div>
  )
}

export default Header