import { useEffect, useState } from "react";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(MenuApi);
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

  if (loading) return <h1>LOADING.....</h1>;

  // ✅ safe destructuring with fallbacks
  const info = resMenu?.data?.cards?.[2]?.card?.card?.info || {};
  const menu: ItemCard[] =
    resMenu?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
      ?.card?.card?.itemCards || [];

  return (
    <div>
      <h1>{info.name}</h1>
      <h4>
        {(info.cuisines ?? []).join(", ")} - {info.costForTwoMessage}
      </h4>

      <h2>{info.name} Menu</h2>
      <ul>
        {menu.map((item) => {
          const dish = item.card.info;
          const price =
            (dish.price ?? dish.defaultPrice ?? 0) / 100; // ✅ safe price handling
          return (
            <li key={dish.id}>
              {dish.name} - ₹{price}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestrauntMenu;
