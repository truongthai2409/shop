import React from 'react';
import { useSelector } from 'react-redux';
import { MdCancel } from 'react-icons/md';
import { RootState } from '../../stores';
// import { RootState } from '../homeStore';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const items = useSelector((state: RootState) => state.cart.items);

  return (
    <div
      className={`overflow-hidden overflow-y-scroll fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform transition-transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button
        onClick={onClose}
        className="absolute p-2 bg-gray-200 rounded-full top-4 right-4"
      >
        <MdCancel className="w-6 h-6 text-black" />
      </button>
      <div className="p-4">
        <h2 className="text-lg font-bold">Giỏ hàng của bạn</h2>
        {items.length === 0 ? (
          <p className="mt-4 text-center text-gray-500">Giỏ hàng trống</p>
        ) : (
          <ul>
            {items.map(item => (
              <li key={item.id} className="mb-4">
                <div className="flex items-center">
                  <img src={item.images[0]} alt={item.title} className="w-16 h-16 mr-4" />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p>${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;
