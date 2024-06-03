import React from 'react';
import { Navigate } from 'react-router-dom';
import { RoutesEnum } from '../CONSTANTS';

interface ProtectedRouteProps {
  element: React.ReactNode;
  isAuthenticated: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, isAuthenticated }) => {
  return isAuthenticated ? element : <Navigate to={RoutesEnum.LOGIN} />
}
