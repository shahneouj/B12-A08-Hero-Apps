import logo from '../../assets/logo.png'

const Loder = () => {
  return (
    <div className={'w-full flex  place-content-center place-items-center h-[100dvh] text-5xl'}>
      <img src={logo} className={`animate-spin  loading-xl mr-4 opacity-20 w-[100px] `}></img>
      <p >Loding<span className="loading loading-dots loading-xl"></span></p>

    </div>
  );
};

export default Loder;