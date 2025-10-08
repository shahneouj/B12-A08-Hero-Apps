import cardimg from '../../assets/demo-app6.webp';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
const Card = ({ value }) => {
  return (
    <div className='w-full p-4 rounded-lg bg-base-100 flex flex-col gap-y-4  shadow-xl/20'>
      <img src={value.image} alt="" className='rounded-lg min-size-72 h-[316px] aspect-square' />
      <h3 className='text-base-content font-bold text-lg'>Forest: Focus for Productivity</h3>
      <div className="info flex justify-between">
        <div className="downloads text-success p-1.5 font-bold flex items-center gap-x-2">
          {/* <img src={download} alt="" className='size-4 stroke-success' />*/}
          <MdOutlineFileDownload></MdOutlineFileDownload> 9m</div>
        <div className="reviewNum text-warning p-1.5 font-bold flex items-center gap-x-2">
          {/* <img src={star} alt="" className='size-4 ' /> */}
          <FaStar></FaStar>
          4.6
        </div>
      </div>

    </div>
  );
};

export default Card;