import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus.tsx"

const Header = ()=>{
  const [loginLogout,setLoginLogout] = useState(true)

  const action = ()=>{
     setLoginLogout(!loginLogout)
  }
    const app_logo = import.meta.env.VITE_LOGO;
     
    const onlineStatus = useOnlineStatus();
    
  
    return (
    <div className="header flex justify-between items-center bg-white shadow-md px-8 py-4 rounded-xl m-6">
  {/* Logo Section */}
  <div className="logo flex items-center space-x-3">
    <img className="w-14 h-14 rounded-full shadow-md" src={app_logo} alt="logo" />
    <h1 className="text-2xl font-bold text-gray-800 tracking-wide">Brocelle</h1>
  </div>

  {/* Links Section */}
  <div className="links flex items-center space-x-8 text-lg font-medium text-gray-600">
    {onlineStatus ? (
      <span className="text-green-600 font-semibold">Online ✔</span>
    ) : (
      <span className="text-red-500 font-semibold">Offline 🤷‍♀️</span>
    )}

    <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
    <Link to="/dineout" className="hover:text-blue-500 transition-colors">Dineout</Link>
    <Link to="/about" className="hover:text-blue-500 transition-colors">About</Link>

    <Link>
      <CiShoppingCart size={28} className="text-gray-700 hover:text-blue-500 transition-colors" />
    </Link>

    <button 
      onClick={action} 
      className="ml-4 px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all shadow-md"
    >
      {loginLogout ? "Login" : "Logout"}
    </button>
  </div>
</div>

  )
}

export default Header