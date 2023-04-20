import { Outlet } from 'react-router-dom';
import { NavigationBar } from '../components';

const Root = () => (
  <>
    <NavigationBar />
    <Outlet />
  </>
);

export default Root;
