import Card from '../../component/Card/Card';
import { CiSearch } from "react-icons/ci";
import { useLoaderData } from 'react-router';
const Apps = () => {
  const appDatas = useLoaderData();
  // console.log(appDatas);

  return (
    <>
      {/* <Card></Card> */}
      <section className="appHeader text-center space-y-4 pt-20 pb-10">
        <h1 className='text-5xl font-bold '>Our All Application</h1>
        <p>Explore All Apps on the Market developed by us. We code for Millions</p>
      </section>

      <section className="apps">
        <div className="search flex justify-between items-center">
          <h3 className='text-2xl font-semibold'>(132) Apps Found</h3>
          <div className="searchBox">
            <label className="flex items-center gap-x-2 border border-[#627382] px-4 py-3 md:w-[400px] rounded text-[#627382]">
              <CiSearch />
              <input type="search" placeholder="search Apps" className='!bg-none w' />
            </label>
          </div>
        </div>
        <div className="allCard grid md:grid-cols-4 gap-4 pt-4 pb-20">
          {Array.isArray(appDatas) ? (
            appDatas.map((value) => {
              return <Card value={value} key={value.id} />
            })
          ) : <h1> some shit is happening</h1>
          }

        </div>
      </section>
    </>
  );
};

export default Apps;