import Layout from '../layout/Layout';
import { useAuth } from '../../context/AuthContext';
import Login from '@/components/Login';

const Home = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <Layout>
      {!isAuthenticated ? (
        <Login />
      ) : (
        <div>
          <h2>Welcome back!</h2>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </Layout>
  );
};

export default Home;
