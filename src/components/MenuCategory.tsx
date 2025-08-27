const MenuCategory = ({ data }) => {
  console.log(data);

  const items = data?.itemCards || data?.categories || [];

  return (
    <div>
      <div className="flex justify-between mb-4 shadow-md p-2">
        <h4 className="text-2xl ">
          {data?.title} ({items.length})
        </h4>
        <span>^</span>
      </div>

      <ul>
        {items.map((item) => {
          const dish = item?.card?.info;
          if (!dish) return null;

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

export default MenuCategory;
