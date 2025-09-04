import { useState } from "react";
import Card, {promotedRestaurantCard} from "./Card";
import useRestaurants from "../hooks/useRestaurants"; // our custom hook
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import Shimmer from "./Shimmer";
const Body = () => {
  const [searchbtn, setSearchbtn] = useState("");
  const { restaurants, loading } = useRestaurants();

  const filteredRestaurants = restaurants.filter((r: any) => {
    const search = searchbtn.toLowerCase();
    const name = r?.info?.name?.toLowerCase() || "";
    const description = r?.info?.cuisines?.join(", ").toLowerCase() || "";

    return name.includes(search) || description.includes(search);
  });

    const  onlineStatus   = useOnlineStatus();

    if(onlineStatus == false) return <h1>NO Internet conection detected</h1>

  const PromotedRestaurant = promotedRestaurantCard(Card);

  return (
    <div className="body-container px-6 py-8">
  {/* 🔍 Search box */}
  <div className="search-box flex justify-center mb-8">
    <input
      onChange={(e) => setSearchbtn(e.target.value)}
      type="search"
      placeholder="Search restaurants..."
      className="w-full max-w-md px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
    />
  </div>

  {/* ⏳ Loader */}
  {loading && <Shimmer/>}

  {/* 🃏 Cards grid */}
  <div className="card-container grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {filteredRestaurants.map((item: any) => (
      <Link key={item.info.id} to={`/restaurant/${item.info.id}`}>
        {item.info.promoted ? (
          <PromotedRestaurant
            image={item.info.cloudinaryImageId}
            name={item.info.name}
            description={item.info.cuisines}
            price={item.info.costForTwo}
            rating={item.info.avgRating}
          />
        ) : (
          <Card
            image={item.info.cloudinaryImageId}
            name={item.info.name}
            description={item.info.cuisines}
            price={item.info.costForTwo}
            rating={item.info.avgRating}
          />
        )}
      </Link>
    ))}
  </div>
</div>

  );
};

export default Body;
