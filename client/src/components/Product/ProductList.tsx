import { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../../config/api/product';

const ProductList = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const products = await getProducts();
    setProducts(products);
  };

  const handleDelete = async (id: number) => {
    await deleteProduct(id);
    fetchProducts();
  };

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl">Product List</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Title</th>
            <th className="py-2">Price</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td className="py-2">{product.id}</td>
              <td className="py-2">{product.title}</td>
              <td className="py-2">{product.price}</td>
              <td className="py-2">
                <button className="px-4 py-2 mr-2 text-white bg-red-500" onClick={() => handleDelete(product.id)}>Delete</button>
                <button className="px-4 py-2 text-white bg-blue-500">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
