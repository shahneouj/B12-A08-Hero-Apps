import React, { useState } from 'react';
import InstalledApps from '../../component/InstalledApps/InstalledApps';
import { getDataToLocal, removeFromLocal } from '../../utilitis/localHost';
import { useLoaderData } from 'react-router';

const Installation = () => {
  const array = useLoaderData();
  const [sort, setSort] = useState("sort_asc")
  const newArray = array.filter((item) => getDataToLocal().includes(JSON.stringify(item.id)))

  const [installedApp, setInstalledApp] = useState(newArray)
  const sortedArray = installedApp.sort((a, b) => {
    if (sort === 'sort_asc') return Number(a.downloads) - Number(b.downloads);
    if (sort === 'sort_dsc') return Number(b.downloads) - Number(a.downloads);
  });

  const handlRemove = (id) => {
    removeFromLocal(id);
    setInstalledApp(prev => prev.filter(item => item.id !== id))
  }

  return (
    <section className='py-20 h-[80dvh] '>
      <div className="heading flex flex-col place-content-center place-items-center gap-y-4 ">
        <h2 className=' text-2xl md:text-5xl text-[#001931] font-bold md:font-extrabold'>Your Installed Apps</h2>
        <p className='text-base text-[#627382] text-center'>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="sort flex md:flex-row flex-col gap-4 w-full justify-between items-center py-10">
        <h3 className='text-2xl font-bold'>{sortedArray.length} Apps Found</h3>
        <select className="select focus-visible:!outline-none focus-within:!outline-none !border-none"
          value={sort}
          onChange={e => setSort(e.target.value)}>
          <option disabled={true}>Sort By</option>
          <option value="sort_asc">Sort by ASC</option>
          <option value="sort_dsc">Sort by DSC</option>
        </select>
      </div>
      {
        newArray.length > 0 ? (
          installedApp.map((value, index) => <InstalledApps key={index} value={value} handlRemove={handlRemove}></InstalledApps>)
        ) : <h3 className='w-full text-2xl md:text-4xl font-bold flex place-content-center'> No App Installed</h3>
      }

    </section>
  );
};

export default Installation;