import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

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
  const menu: ItemCard[] =
    resMenu?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
      ?.card?.card?.itemCards || [];

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

  {/* Menu Items */}
  <ul className="space-y-3">
    {menu.map((item) => {
      const dish = item.card.info;
      const price = (dish.price ?? dish.defaultPrice ?? 0) / 100;

      return (
        <li
          key={dish.id}
          className="flex justify-between items-center border-b pb-2 last:border-none"
        >
          <span className="text-gray-700 font-medium">{dish.name}</span>
          <span className="text-gray-900 font-semibold">₹{price}</span>
        </li>
      );
    })}
  </ul>
</div>

  );
};

export default RestrauntMenu;
