import { useEffect, useState } from "react";

const RestrauntMenu = ()=>{

    const [ResMenu , setResMenu] = useState(null);

    const MenuApi = import.meta.env.VITE_RESTRAUNT_MENU_API
    useEffect(()=>{
        fetchData();
   },[] )
   
   const fetchData = async()=>{
        const data =  await fetch (MenuApi);
        const json = await data.json();
        console.log(json);
        setResMenu(json);
   }
   if (ResMenu == null ) return <h1>LOADING.....</h1>

    const {name,costForTwoMessage,cuisines,id} = ResMenu?.data?.cards[2]?.card?.card?.info 
   const menu = ResMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards

    return (
        <div>
            <h1>{name}</h1>
            <h4>{cuisines.join(",")} - {costForTwoMessage} </h4>
            
            <h2>{name} Menu</h2>
            <ul>
                
                {menu?.map((items : any)=><li key={items.card.info.id}>{items.card.info.name} - Rs {items.card.info.defaultPrice/100 || items.card.info.price/100}</li>)}                               
                
            </ul>
        </div>

    )
}
 
export default RestrauntMenu ;