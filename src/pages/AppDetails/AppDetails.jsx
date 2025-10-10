import { FaStar } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import like from '../../assets/icon-review.png';
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useLoaderData, useParams } from "react-router";
import { format } from "../../utilitis/utilitis";
import { getDataToLocal, setDataToLocal } from "../../utilitis/localHost";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const AppDetails = () => {
  const appDeatialsData = useLoaderData();
  const { id } = useParams();
  const newDetailsData = appDeatialsData.find((a) => Number(id) === a.id);
  const { ratings, image, title, companyName, downloads, ratingAvg, reviews, size, description } = newDetailsData;
  const store = {
    image,
    title,
    downloads,
    ratingAvg,
    size,
    id
  }
  const installed = getDataToLocal().includes(JSON.stringify(newDetailsData.id));
  const [clickable, setClickable] = useState(() => installed)
  const handlbtnClick = () => {
    setDataToLocal(store);
    setClickable(true)
    toast.success("Installing the  App")
  }

  return (
    <>
      <section className="py-20 space-y-10">
        <ToastContainer />
        <div className="appdetails grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-10 ">
          <div className="img">
            <img src={image} alt="" className="h-full w-full aspect-auto object-cover" />
          </div>
          <div className="details-info">
            <h2 className="text-[32px] font-bold text-[#001931]">{title}</h2>
            <p>Developed by <span className="text-linear font-bold">{companyName}</span></p>
            <span className="border border-t border-gray-300 w-full block my-10"></span>
            <div className="info flex justify-start gap-x-6 mb-4">
              <div className="downloads md:p-1.5  flex-col items-start md:w-[150px] ">
                <MdOutlineFileDownload size={"40px"} color="oklch(0.77 0.17 161.5)"></MdOutlineFileDownload>
                <span className="text-base font-normal text-[#001931]">Downloads<br /></span>
                <span className="text-2xl md:text-[40px] font-bold md:font-extrabold">{format(downloads)}</span>
              </div>
              <div className="reviewNum md:p-1.5  flex-col items-start  md:w-[150px] ">
                <FaStar size={"40px"} color="oklch(0.82 0.17 88.9)"></FaStar>
                <span className="text-base font-normal text-[#001931]">Average Ratings<br /></span>
                <span className="text-2xl md:text-[40px] font-bold md:font-extrabold">{ratingAvg}</span>
              </div>
              <div className="likeNum md:p-1.5  flex-col items-center  md:w-[150px] ">
                <img src={like} alt="" />
                <span className="text-base font-normal text-[#001931]">Average Ratings<br /></span>
                <span className="text-2xl md:text-[40px] font-bold md:font-extrabold">{format(reviews)}</span>
              </div>

            </div>
            <button onClick={handlbtnClick} disabled={clickable} className={`btn-green !no-underline ${clickable && 'pointer-events-none '}`}>
              {clickable ? `Installed` : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
        <span className="border border-t border-gray-300 w-full block my-10"></span>

        <div className="appdeatials-chart">
          <h4 className="Rating text-3xl font-bold" >
            Rating
          </h4>
          <div className='w-full h-96'>
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                layout="vertical"
                width={500}
                height={400}
                data={ratings}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" scale="band" />
                <Tooltip />
                <Legend />

                <Bar dataKey="count" barSize={20} fill="oklch(80% 0.19 84)" />

              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
        <span className="border border-t border-gray-300 w-full block my-10"></span>

        <div className="appdetails-description">
          <h4 className="description text-3xl font-bold" >
            Description
          </h4>
          <p className="text- text text-[#627382]">
            {description}
          </p>
        </div>
      </section >
    </>
  );
};

export default AppDetails;