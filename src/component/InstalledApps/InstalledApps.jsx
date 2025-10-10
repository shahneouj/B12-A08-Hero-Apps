import demo from '../../assets/demo-app6.webp'
import download from "../../assets/icons/download.svg";
import star from "../../assets/icons/star.svg";
import { removeFromLocal } from '../../utilitis/localHost';
import { format } from '../../utilitis/utilitis';
const InstalledApps = ({ value, handlRemove }) => {
  return (
    <div className='w-full p-4 flex items-center justify-between bg-base-100 rounded shadow-2xl mt-4' >
      <div className="left flex items-center gap-x-4">
        <div className="appImg">
          <img src={value.image} alt="" className='size-20' />
        </div>
        <div className="appContent">
          <h3 className='text-base-content font-bold text-lg'>{value.title}</h3>
          <div className="information grid grid-cols-3 gap-x-4 justify-center items-center">
            <div className="downloads text-success p-1.5  font-bold flex items-center gap-x-2">
              <img src={download} alt="" className='size-4 stroke-success' />{format(value.downloads)}</div>
            <div className="reviewss text-warning p-1.5 font-bold flex items-center gap-x-2">
              <img src={star} alt="" className='size-4 ' />
              {value.ratingAvg}
            </div>
            <p className='text-base text-gray-400'>{value.size} MB</p>
          </div>
        </div>
      </div>
      <div className="right">
        <button onClick={() => handlRemove(value.id)} className='btn-green '>Uninstall</button>
      </div>

    </div>
  );
};

export default InstalledApps;