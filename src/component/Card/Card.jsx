import cardimg from '../../assets/demo-app6.webp';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router';
import { format } from '../../utilitis/utilitis';
const Card = ({ value }) => {
  return (
    <Link to={`/appDetails/${value.id}`}>
      <div className='w-full p-4 rounded-lg bg-base-100 flex flex-col gap-y-4  shadow-xl/20'>
        <img src={value.image} alt="" className='rounded-lg min-size-72 h-[316px] aspect-square opject-fit' />
        <h3 className='text-base-content font-bold text-lg'>{value.title}</h3>
        <div className="info flex justify-between">
          <div className="downloads text-success p-1.5 font-bold flex items-center gap-x-2">

            <MdOutlineFileDownload></MdOutlineFileDownload>{format(value.downloads)}</div>
          <div className="reviewNum text-warning p-1.5 font-bold flex items-center gap-x-2">

            <FaStar></FaStar>
            {value.ratingAvg}
          </div>
        </div>

      </div>
    </Link>
  );
};

export default Card;