import { useEffect, useState } from "react";
import Card from "./Card";

const Body = () => {
  const [resInfo, setResInfo] = useState<any>(null);
  const [searchbtn, setSearchbtn] = useState("");

  const api_key = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(api_key);
    const json = await res.json();
    setResInfo(json);
  };

  const path =
    resInfo?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants || [];

  // ✅ Proper filtering
  const filteredRestaurants = path.filter((r: any) => {
    const search = searchbtn.toLowerCase();
    const name = r?.info?.name?.toLowerCase() || "";
    const description = r?.info?.cuisines?.join(", ").toLowerCase() || "";

    return name.includes(search) || description.includes(search);
  });

  return (
    <div className="body-container">
      <div className="Search-box">
        <input
          onChange={(e) => setSearchbtn(e.target.value)}
          type="search"
          placeholder="Search restaurants..."
        />
      </div>

      <div className="card-container">
        {filteredRestaurants.map((item: any) => (
          <Card
            key={item.info.id}
            image={item.info.cloudinaryImageId}
            name={item.info.name}
            description={item.info.cuisines}
            price={item.info.costForTwo}
            rating={item.info.avgRating}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
