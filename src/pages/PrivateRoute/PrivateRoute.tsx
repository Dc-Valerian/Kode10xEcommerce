// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useAppSelector } from "../../global/Store";
// import { PrivateRouteProps } from "../Types/Interface";

// const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
//   const verify = useAppSelector((user) => user?.verified!);

//   if (verify) {
//     return <>{children}</>;
//   } else {
//     return <Navigate to="/log-in" />;
//   }
// };

// export default PrivateRoute;

const PrivateRoute = () => {
  return <div>PrivateRoute</div>;
};

export default PrivateRoute;
