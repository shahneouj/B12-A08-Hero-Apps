import cardimg from '../../assets/demo-app6.webp';
import download from "../../assets/icons/download.svg";
import star from "../../assets/icons/star.svg";

const Card = () => {
  return (
    <div className=' p-4 rounded-lg bg-base-100 flex flex-col gap-y-4 w-fit shadow-xl/20'>
      <img src={cardimg} alt="" className='rounded-lg min-size-72' />
      <h3 className='text-base-content font-bold text-lg'>Forest: Focus for Productivity</h3>
      <div className="info flex justify-between">
        <div className="downloads text-success p-1.5 font-bold flex items-center gap-x-2">
          <img src={download} alt="" className='size-4 stroke-success' />9m</div>
        <div className="reviews text-warning p-1.5 font-bold flex items-center gap-x-2">
          <img src={star} alt="" className='size-4 ' />
          4.6
        </div>
      </div>

    </div>
  );
};

export default Card;