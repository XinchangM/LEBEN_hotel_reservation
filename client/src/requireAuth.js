import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


export function RequireAuth({ children }) {
    const { isAuthenticated, isLoading } = useAuth0();
  
    if (!isLoading && !isAuthenticated) {
      return <Navigate to="/" replace />;
    }
  
    return children;
  }