import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../store/CartSlice"; // ✅ make sure removeItem exists in your slice

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-semibold mb-4">Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <div className="flex-1 text-left">
                <h2 className="font-medium">{item.name}</h2>
                <p className="text-gray-600 text-sm">
                  ₹{((item.price ?? item.defaultPrice ?? 0) / 100).toFixed(2)}
                </p>
              </div>

              <button
                onClick={() => dispatch(removeItem(item.id))}
                className="bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
