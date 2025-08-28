import { useState } from "react";

const MenuCategory = ({ data }) => {
  const [open, setOpen] = useState(false);
  const isLeaf = Array.isArray(data?.itemCards);

  return (
    <div className="mb-4 border rounded-lg shadow-sm">
      {/* Header */}
      <div
        className="flex justify-between items-center px-4 py-3 bg-gray-100 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h4 className="text-lg font-semibold text-gray-800">
          {data?.title} (
          {isLeaf ? (data?.itemCards?.length ?? 0) : (data?.categories?.length ?? 0)})
        </h4>
        <span
          className={`transform transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </div>

      {/* Body */}
      {open && (
        <div className="px-4 py-3 bg-white">
          {isLeaf ? (
            <ul className="space-y-2">
              {data.itemCards.map((it) => {
                const dish = it?.card?.info;
                if (!dish) return null;
                const price = ((dish.price ?? dish.defaultPrice ?? 0) / 100).toFixed(2);
                return (
                  <li
                    key={dish.id}
                    className="flex justify-between items-center border-b pb-2 last:border-none"
                  >
                    <span className="text-gray-700">{dish.name}</span>
                    <span className="font-semibold">₹{price}</span>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="space-y-3">
              {(data?.categories ?? []).map((sub) => (
                <MenuCategory key={sub.title} data={sub} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MenuCategory;
