import { Route } from 'react-router-dom';
import { axios } from '../../utils/index';
import { useHistory } from 'react-router-dom';
export function AuthAppRoutes({ isAuth, component: Component, ...rest }) {
  const history = useHistory();
  return (
    <Route
      {...rest}
      render={() => {
        const token = localStorage.getItem('user');
        if (!token) {
          return history.push('/login');
        }
        axios.post('/check-user').then(({ data }) => {
          if (data.user === null) {
            localStorage.removeItem('user');
            history.push('/login');
          }
        });
        return <Component />;
      }}
    />
  );
}

export function AuthLoginRoute({ isAuth, component: Component, ...rest }) {
  const history = useHistory();
  return (
    <Route
      {...rest}
      render={() => {
        const token = localStorage.getItem('user');
        if (!token) {
          return <Component />;
        } else {
          history.push('/');
        }
      }}
    />
  );
}
