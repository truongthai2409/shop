import React, { useEffect } from "react";
import { RootState } from "../../stores";
import { useAppSelector } from "../../hooks/use_app_dispatch";

interface CartListProps {
  isCartOpen: boolean;
  handleCartButtonClick: () => void;
}

const CartList: React.FC<CartListProps> = ({ isCartOpen, handleCartButtonClick }) => {
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  useEffect(() => {
    if (isCartOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    // Cleanup on component unmount or when isCartOpen changes
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isCartOpen]);

  return (
    <>
      <div
        className={`fixed top-0 right-0 w-[300px] h-full bg-white shadow-lg z-50 transform transition-transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button
            onClick={handleCartButtonClick}
            className="absolute text-gray-600 top-4 right-4"
          >
            X
          </button>
        </div>
        <div className="p-4">
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between mb-4"
                >
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-gray-600">
                      ${item.price.toFixed(2)} x {item.quantity}
                    </p>
                  </div>
                  <p className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default CartList;
