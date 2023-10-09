import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { IsAuthenticated } from '../services/Auth';

const ProtectedRoute: React.FC<{ element: React.ReactNode }> = ({ element, ...rest }) => {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

useEffect(() => {
    const checkAuthentication = async () => {
      const isAuthenticated = await IsAuthenticated();
      console.log(isAuthenticated);
      setAuthenticated(isAuthenticated);
    };

    checkAuthentication();
  }, []);
  if (authenticated === null) {
    return null;
  }

  if (authenticated) {
    // Se o usuário estiver autenticado, renderize o elemento da rota
    return React.cloneElement(element as React.ReactElement, rest);
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;