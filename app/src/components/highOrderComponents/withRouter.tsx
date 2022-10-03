import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function withRouter<T>(Component: React.ElementType) {
  function ComponentWithRouterProp(props: T) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

export default withRouter;
