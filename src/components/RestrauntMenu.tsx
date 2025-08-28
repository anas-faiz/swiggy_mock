import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuCategory from "./MenuCategory";

interface ItemCard {
  card: {
    info: {
      id: string;
      name: string;
      price?: number;
      defaultPrice?: number;
    };
  };
}

const RestrauntMenu = () => {
  const [resMenu, setResMenu] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const MenuApi = import.meta.env.VITE_RESTRAUNT_MENU_API;

  const { resId } = useParams();  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${MenuApi}${resId}`);
        const json = await res.json();
        console.log(json);
        setResMenu(json);
      } catch (error) {
        console.error("Error fetching menu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [MenuApi]);

  

  if (loading) return <Shimmer/>;

  // ✅ safe destructuring with fallbacks
  const info = resMenu?.data?.cards?.[2]?.card?.card?.info || {};
  const menuInfo = resMenu?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards|| [];
  const category = menuInfo.filter(
  (c: any) =>
    c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ||
    c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);

      //console.log(category);


  return (
    <div className="max-w-3xl mx-auto px-6 py-10 bg-white shadow-lg rounded-2xl">
  {/* Restaurant Info */}
  <h1 className="text-3xl font-bold text-gray-800 mb-2">{info.name}</h1>
  <h4 className="text-gray-600 text-lg mb-6">
    {(info.cuisines ?? []).join(", ")} • {info.costForTwoMessage}
  </h4>

  {/* Menu Title */}
  <h2 className="text-2xl font-semibold text-orange-500 mb-4">
    {info.name} Menu
  </h2>
  {category.map((c)=>{
    return(
      <MenuCategory key={c?.card?.card?.title} data={c?.card?.card}/>
    )
  })}

  </div>
  

  );
};

export default RestrauntMenu;
