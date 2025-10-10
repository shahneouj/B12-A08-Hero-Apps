import Loder from '../../component/Loder/Loder';
{/* <Loder className={'flex text-4xl font-extrabold '} /> */ }
import HeroImg from '../../assets/hero.png'
import Gooleplay from '../../assets/icons/googleplay.png'
import Applestore from '../../assets/icons/apple.jpg'
import Card from '../../component/Card/Card';
import { Link, useLoaderData } from 'react-router';


const Home = () => {

  const homeData = useLoaderData()

  return (
    <>
      <section className="hero-banner flex flex-col place-items-center pt-20 space-y-4">
        <h1 className='text-center text-3xl md:text-7xl font-bold max-w-2xl'>We Build
          <span className='text-linear'> Productive</span> Apps</h1>
        <p className='max-w-3xl text-center '>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
        <div className="buttons flex md:flex-row flex-col gap-5 mb-10">
          <Link to="https://play.google.com/store/games" className="googlplay py-3 px-6 flex gap-x-2.5 border border-gray-300 rounded-lg items-center font-extrabold text-lg text-info-content">
            <img src={Gooleplay} alt="" className='size-8' />
            <span> Google Play</span>

          </Link>
          <Link to='https://www.apple.com/app-store/' className=" googlplay py-3 px-6 flex gap-x-2.5 border border-gray-300 rounded-lg items-center font-extrabold text-lg text-info-content">
            <img src={Applestore} alt="" className='size-8' />
            <span> App Store</span>

          </Link>

        </div>
        <img src={HeroImg} alt="" className='w-fit text-center' />
      </section>
      <section className="reviews py-20 text-center space-y-10 ">
        <h2 className='text-2xl md:text-5xl text-white font-extrabold'>Trusted by Millions, Built for You</h2>
        <div className="reviews-info flex md:flex-row flex-col gap-4 place-content-between max-w-[1440px] mx-auto">
          <div className="downloads flex flex-col gap-y-4">
            <span className='text-white'>Total Downloads</span>
            <h4 className='text-white text-2xl md:text-6xl font-extrabold'>29.6M</h4>
            <span className='text-white'>21% more than last month</span>
          </div>
          <div className="views flex flex-col gap-y-4">
            <span className='text-white '>Total Reviews</span>
            <h4 className='text-white text-2xl md:text-6xl font-extrabold'>906K</h4>
            <span className='text-white'>46% more than last month</span>
          </div>
          <div className="activeApps flex flex-col gap-y-4">
            <span className='text-white'>Active Apps</span>
            <h4 className='text-white text-2xl md:text-6xl font-extrabold'>132+</h4>
            <span className='text-white'>31 more will Launch</span>
          </div>
        </div>
      </section >
      <section className="appCards py-20 space-y-10 text-center">
        <div className="appHeader text-center space-y-4">
          <h2 className='text-5xl  font-extrabold'>Trending Apps</h2>
          <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>

        </div>
        <div className="appCard grid md:grid-cols-4 gap-4 pt-4">
          {
            homeData.map((value) => {
              return <Card key={value.id} value={value}></Card>
            })
          }
        </div>
        <Link to="/apps" className="btn-linear">
          Show All
        </Link>
      </section>
    </>
  );
};

export default Home;