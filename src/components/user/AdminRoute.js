import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const AdminRoute = ({ children }) => {
  const role = useSelector((state) => state.users.user.role);

  return role === 'admin' ? children : <Navigate to="/mainpage" />;
};

AdminRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AdminRoute;
