import TopNavbar from '../components/TopNavbar';
import Navbar from '@/components/NavBar';
import Carousel from '@/components/Carousel';
import CentreExcel from '@/components/CentreExcel';
import WhyCareHospitals from '@/components/WhyCareHospitals';
import Locations from '@/components/Locations';
import LatestBlogs from '@/components/LatestBlogs';

const Layout = ({ children }) => {
  return (
    <>
      <TopNavbar/>
      <Navbar/>
      <Carousel/>
      <CentreExcel/>
      <WhyCareHospitals/>
      <Locations/>
      <LatestBlogs/>
    </>
  );
};

export default Layout;
