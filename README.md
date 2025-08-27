#header
#body
    -search-bar
    -card-component
        -food img
        -title of food
        -rating of foood
        -price of food
        -tags food is related to
#footer


<div>
       
  
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