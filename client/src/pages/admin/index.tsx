import { useState } from 'react';
import ProductForm from '../../components/Cart/ProductForm';
import store from '../../stores';
// import ProductList from '../../components/Product/ProductList';


const AdminPage = () => {
  const [refresh, setRefresh] = useState(false);

  const handleSuccess = () => {
    setRefresh(!refresh);
  };
  console.log('State after dispatch:', store.getState().auth);

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-8 text-4xl">Admin Dashboard</h1>
      <ProductForm onSuccess={handleSuccess} />
      {/* <ProductList key={refresh} /> */}
    </div>
  );
};

export default AdminPage;
