// import React, { useContext } from 'react';
// import { CartContext } from '../context/CartContext';
// import { Category } from '../../types';

// interface SidebarProps {
//   categories: Category[];
//   onSelectSideBar: (category: Category) => void;
// }

// const SidebarCart: React.FC<SidebarProps> = ({ categories, onSelectSideBar }) => {
//   const { cart, removeFromCart, clearCart } = useContext(CartContext);

//   return (
//     <div className="sidebar">
//       <h2>Categories</h2>
//       <ul>
//         {categories.map(category => (
//           <li key={category.id} onClick={() => onSelectSideBar(category)}>
//             {category.name}
//           </li>
//         ))}
//       </ul>

//       <h2>Cart</h2>
//       <ul>
//         {cart.map(item => (
//           <li key={item.id}>
//             {item.title} - {item.quantity} x ${item.price}
//             <button onClick={() => removeFromCart(item.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={clearCart}>Clear Cart</button>
//     </div>
//   );
// };

// export default SidebarCart;
