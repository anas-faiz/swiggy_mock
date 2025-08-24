import { useState } from "react";
import Card from "./Card";
import useRestaurants from "../hooks/useRestaurants"; // our custom hook
import { Link } from "react-router-dom";

const Body = () => {
  const [searchbtn, setSearchbtn] = useState("");
  const { restaurants, loading } = useRestaurants();

  const filteredRestaurants = restaurants.filter((r: any) => {
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

      {loading && <p>Loading restaurants...</p>}

      <div className="card-container">
        {filteredRestaurants.map((item: any) => (
          <Link key={item.info.id} 
            to={`/restaurant/${item.info.id}`}>
            <Card            
            image={item.info.cloudinaryImageId}
            name={item.info.name}
            description={item.info.cuisines}
            price={item.info.costForTwo}
            rating={item.info.avgRating}
          />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
