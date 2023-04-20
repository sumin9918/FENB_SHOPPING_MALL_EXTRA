import { Outlet } from 'react-router-dom';
import { Footer, NavigationBar } from '../components';

const Root = () => (
  <>
    <NavigationBar />
    <Outlet />
    <Footer />
  </>
);

export default Root;
