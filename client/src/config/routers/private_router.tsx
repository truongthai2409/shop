import React from 'react';
import { Navigate } from 'react-router-dom';
import { RootStateAuth } from '../../stores';
import { useAppSelector } from '../../hooks/use_app_dispatch';

interface PrivateRouteProps {
  element: React.ReactNode;
} 

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const isAuthenticated = useAppSelector((state: RootStateAuth) => state.auth.isAuthenticated);
  return isAuthenticated ? element : <Navigate to="/login"/>;
};

export default PrivateRoute;


// import React from 'react';
// import { Route, redirect } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

//   return (
//     <Route
//       {...rest}
//       render={props =>
//         isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <redirect  to="/login" />
//         )
//       }
//     />
//   );
// };

// export default PrivateRoute;
