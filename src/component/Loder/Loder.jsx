import logo from '../../assets/logo.png'

const Loder = ({ className }) => {
  return (
    <div className={className}>
      <img src={logo} className=" animate-spin  loading-xl mr-4 opacity-20"></img>
      <p >Loding<span className="loading loading-dots loading-xl"></span></p>

    </div>
  );
};

export default Loder;