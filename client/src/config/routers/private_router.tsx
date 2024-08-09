// import React from "react";
// import { Route, RouteProps, redirect } from "react-router-dom";

// interface PrivateRouteProps extends RouteProps {
//   component: React.ComponentType<any>;
//   isAuthenticated: boolean;
// }

// const PrivateRoute: React.FC<PrivateRouteProps> = ({
//   component: Component,
//   isAuthenticated,
//   ...rest
// }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       isAuthenticated ? (
//         <Component {...props} />
//       ) : (
//         // <Redirect to="/login" />
//         redirect("/login")
//       )
//     }
//   />
// );

// export default PrivateRoute;
