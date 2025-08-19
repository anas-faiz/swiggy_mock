import { useEffect, useState } from "react";
import Card from "./Card";

const Body = () => {
  const [resInfo, setResInfo] = useState<any>(null);
  const api_key = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(api_key);
    const json = await res.json();
    console.log(json)
    setResInfo(json);
  };

  const path =
    resInfo?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants || [];

   // console.log (path);  

  return (
    <div className="body-container">
      <div className="Search-box">
        <input type="search" />
        <button>Search</button>
      </div>

      <div className="card-container">
        {path.map((item: any) => (
          <Card
            key={item.info.id}
            image= {item.info.cloudinaryImageId}
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
