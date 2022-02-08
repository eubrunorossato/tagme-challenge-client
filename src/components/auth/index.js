import { Route } from 'react-router-dom';
import { axios } from '../../utils/index';
export default function AuthAppRoutes({
  isAuth,
  component: Component,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={() => {
        const token = localStorage.getItem('user');
        if (!token) {
          window.location.href = '/login';
        }
        axios.post('/check-user').then(({ data }) => {
          if (data.user === null) {
            localStorage.removeItem('user');
            window.location.href = '/login';
          }
        });
        return <Component />;
      }}
    />
  );
}
