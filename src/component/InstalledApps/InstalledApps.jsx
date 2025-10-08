import demo from '../../assets/demo-app6.webp'
import download from "../../assets/icons/download.svg";
import star from "../../assets/icons/star.svg";
const InstalledApps = () => {
  return (
    <div className='w-full p-4 flex items-center justify-between bg-base-100 rounded' >
      <div className="left flex items-center gap-x-4">
        <div className="appImg">
          <img src={demo} alt="" className='size-20' />
        </div>
        <div className="appContent">
          <h3 className='text-base-content font-bold text-lg'>Forest: Focus for Productivity</h3>
          <div className="information flex space-x-3 items-center">
            <div className="downloads text-success p-1.5 font-bold flex items-center gap-x-2">
              <img src={download} alt="" className='size-4 stroke-success' />9m</div>
            <div className="reviews text-warning p-1.5 font-bold flex items-center gap-x-2">
              <img src={star} alt="" className='size-4 ' />
              4.6
            </div>
            <p className='text-base text-gray-400'>250 MB</p>
          </div>
        </div>
      </div>
      <div className="right">
        <button className='btn-green'>Uninstall</button>
      </div>

    </div>
  );
};

export default InstalledApps;