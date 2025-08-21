import { useState, useEffect } from "react";

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const api_key = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(api_key);
        const json = await res.json();

        const data =
          json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];

        setRestaurants(data);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [api_key]);

  return { restaurants, loading };
};

export default useRestaurants;
