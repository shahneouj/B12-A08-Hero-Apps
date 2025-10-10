import { useState } from 'react';
import Card from '../../component/Card/Card';
import { CiSearch } from "react-icons/ci";
import { useLoaderData } from 'react-router';
import Loder from "../../component/Loder/Loder";
const Apps = () => {
  const appDatas = useLoaderData();
  const [isloading, setIsloading] = useState(false)
  const [searchData, setSearchData] = useState([...appDatas]);
  const handlChange = (e) => {
    setIsloading(true)
    setTimeout(() => {
      const term = e.target.value.trim().toLowerCase();
      const searchApps = term ? appDatas.filter(app => app.title.toLowerCase().includes(term)) : appDatas;
      setSearchData(searchApps);
      setIsloading(false);
    }, 5000);
  }

  return (
    <>
      {/* <Card></Card> */}
      <section className="appHeader text-center space-y-4 pt-20 pb-10">
        <h1 className=' text-2xl md:text-5xl font-bold '>Our All Application</h1>
        <p className='text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
      </section>

      <section className="apps">
        <div className="search flex md:flex-row flex-col gap-4 justify-between items-center">
          <h3 className='text-2xl font-semibold'>({appDatas.length}) Apps Found</h3>
          <div className="searchBox">
            <label className="flex items-center gap-x-2 border border-[#627382] px-4 py-3 md:w-[400px] rounded text-[#627382]">
              <CiSearch />
              <input onChange={handlChange} type="search" placeholder="search Apps" className='!bg-none focus-visible:!outline-none' />
            </label>
          </div>
        </div>
        <div className="allCard grid md:grid-cols-4 gap-4 pt-4 pb-20">
          {isloading ? (
            <div className='col-span-4 flex justify-center items-center h-[30dvh]'>
              <Loder />
            </div>
          ) : searchData.length > 0 ? (
            searchData.map((value) => (
              <Card value={value} key={value.id} />
            ))
          ) : (
            <div className='col-span-4 flex justify-center items-center h-[30dvh]'>
              <p className='text-3xl font-bold'>No App Found</p>
            </div>
          )}

        </div>
      </section>
    </>
  );
};

export default Apps;