import React, { useEffect } from "react";
import { RootState } from "../../stores";
import { useAppDispatch, useAppSelector } from "../../hooks/use_app_dispatch";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../../stores/slices/cart_slice";
import { FaTrash } from "react-icons/fa";

interface CartListProps {
  isCartOpen: boolean;
  handleCartButtonClick: () => void;
}

const CartList: React.FC<CartListProps> = ({ isCartOpen, handleCartButtonClick }) => {
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isCartOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isCartOpen]);

  return (
    <>
      <div
        className={`h-full overflow-x-auto fixed top-0 right-0 w-[300px] bg-white shadow-lg z-50 transform transition-transform ${
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
                <li key={item.id} className="flex items-center justify-between mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-12 h-12 mr-4 rounded-md"
                  />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-gray-600">
                      ${item.price.toFixed(2)} x {item.quantity}
                    </p>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => dispatch(increaseQuantity(item.id))}
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-red-600"
                    >
                      <FaTrash />
                    </button>
                  </div>
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
