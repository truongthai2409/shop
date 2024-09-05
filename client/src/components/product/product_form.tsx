import React, { useState } from 'react';
// import { createProduct, updateProduct } from '../api/products';
import { createProduct, updateProduct } from '../../config/api/product';

interface ProductFormProps {
  product?: any;
  onSuccess: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ product, onSuccess }) => {
  const [formData, setFormData] = useState(product || { title: '', price: 0 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (product) {
      await updateProduct(product.id, formData);
    } else {
      await createProduct(formData);
    }
    onSuccess();
  };

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700">Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
      </div>
      <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">
        {product ? 'Update' : 'Create'}
      </button>
    </form>
  );
};

export default ProductForm;
