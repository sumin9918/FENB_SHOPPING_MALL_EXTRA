import { Outlet } from 'react-router-dom';

import { Footer, ScrollTop, SwitchingPageScrollToTop } from 'components/common';
import { NavigationBar } from 'components/NavigationBar';

const Root = () => (
  <>
    <SwitchingPageScrollToTop />
    <ScrollTop positionY={700} />
    <NavigationBar />
    <Outlet />
    <Footer />
  </>
);

export default Root;
