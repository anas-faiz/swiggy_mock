import { useState } from "react";

const MenuCategory = ({ data }) => {
  const [open, setOpen] = useState(false);
  const isLeaf = Array.isArray(data?.itemCards);
  const image_api = import.meta.env.VITE_IMAGE_KEY;

  return (
    <div className="mb-4 border-b rounded-xl shadow-sm overflow-hidden">
      {/* Header */}
      <div
        className="flex justify-between items-center px-4 py-3 bg-gray-50 hover:bg-gray-100 cursor-pointer transition"
        onClick={() => setOpen(!open)}
      >
        <h4 className="text-lg font-semibold text-gray-800 flex-1">
          {data?.title} (
          {isLeaf
            ? data?.itemCards?.length ?? 0
            : data?.categories?.length ?? 0}
          )
        </h4>
        <span
          className={`transform transition-transform duration-300 text-gray-600 ${
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
            <div className="space-y-4">
              {data.itemCards.map((it) => {
                const dish = it?.card?.info;
                if (!dish) return null;

                const price = (
                  (dish.price ?? dish.defaultPrice ?? 0) / 100
                ).toFixed(2);

                return (
                  <div
                    key={dish.id}
                    className="border-b pb-4 last:border-none"
                  >
                    <div className="flex justify-between items-start gap-4">
                      {/* Left content */}
                      <div className="flex-1">
                        <h2 className="text-gray-900 font-semibold text-base">
                          {dish.name}
                        </h2>
                        <span className="block text-gray-700 font-medium mt-1">
                          ₹{price}
                        </span>
                        {dish.description && (
                          <p className="text-sm text-gray-500 mt-2 leading-snug">
                            {dish.description}
                          </p>
                        )}
                      </div>

                      {/* Right content */}
                      <div className="relative">
                        <img
                          className="w-24 h-24 rounded-lg object-cover border"
                          src={`${image_api}${dish.imageId}`}
                          alt={dish.name}
                        />
                        <button className="absolute bottom-0.5 left-1/2 -translate-x-1/2 bg-amber-800 text-white text-xs px-1 py-0.5 rounded shadow hover:bg-green-700 transition">
                          ADD +
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
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
