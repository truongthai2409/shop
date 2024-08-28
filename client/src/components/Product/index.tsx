// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { Product } from '../../types';
// import { addItem } from '../../stores';
// // import { addItem } from '../homeStore';

// interface ProductProps {
//   product: Product;
// }

// const Item: React.FC<ProductProps> = ({ product }) => {
//   const dispatch = useDispatch();

// //   const handleAddToCart = (product) => {
// //     dispatch(addItem(product));
// //   };

//   return (
//     <div className="max-w-sm m-4 overflow-hidden rounded shadow-lg">
//       <img className="w-full h-[250px]" src={product.images[0]} alt={product.title} />
//       <div className="px-6 py-4">
//         <p className="text-base text-gray-700">{product.title}</p>
//         <div className="mb-2 text-xl font-semibold">${product.price}</div>
//       </div>
//       <div className="flex justify-center px-6 pt-4 pb-2">
//         <button
//           className="px-4 py-2 font-bold text-center text-white bg-blue-500 rounded hover:bg-blue-700 w-[90%] mb-2"
//         //   onClick={handleAddToCart}
//         >
//           Add to cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Item;
