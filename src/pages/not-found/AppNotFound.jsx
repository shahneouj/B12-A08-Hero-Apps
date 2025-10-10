import { Link } from 'react-router';
import errorImg from '../../assets/App-Error.png'


const AppNotFound = () => {
  return (<>

    <div className=' flex flex-col place-content-center place-items-center w-full py-20 space-y-4'>
      <img src={errorImg} alt="" />
      <h1 className='text-5xl font-bold'>Oops, page not found!</h1>
      <p className='text-[#627382]'>The page you are looking for is not available.</p>
      <Link to="/" className="btn-linear !no-underline">
        Go Back
      </Link>
    </div>

  </>
  );
};

export default AppNotFound;