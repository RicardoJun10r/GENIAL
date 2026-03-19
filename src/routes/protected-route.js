import React from 'react';
import { Navigate, useLocation } from 'react-router';
import { UserContext } from '../hooks/user-hook';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = React.useContext(UserContext);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate replace to="/login" state={{ from: location.pathname }} />;
  }

  return children;
}
