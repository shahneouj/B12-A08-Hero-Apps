import { Link } from 'react-router';
import errorImg from '../../assets/error-404.png'
import Footer from '../../component/Footer/Footer';
import Header from '../../component/Header/Header';

const Errorpath = () => {
  return (<>
    <Header></Header>
    <div className=' flex flex-col place-content-center place-items-center w-full py-20 space-y-4'>
      <img src={errorImg} alt="" />
      <h1 className='text-5xl font-bold'>Oops, page not found!</h1>
      <p className='text-[#627382]'>The page you are looking for is not available.</p>
      <Link to="/" className="btn-linear !no-underline">
        Go Back
      </Link>
    </div>
    <Footer></Footer>
  </>
  );
};

export default Errorpath;