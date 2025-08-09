import { CiShoppingCart } from "react-icons/ci";

const Header = ()=>{
  return (
    <div className="header">
      <div className="logo">
        <img src="https://template.canva.com/EAGMppVJ_aY/1/0/1600w-S2LGeYCK5eM.jpg" alt="logo" />
        <h1>Brocelle</h1>
      </div>
      <div className="links">
        <h1>Home</h1>
        <h1>about</h1>
        <h1 className="cart"><CiShoppingCart size={50}/></h1>
        <button>login</button>
      </div>
    </div>
  )
}

export default Header