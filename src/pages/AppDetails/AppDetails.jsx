import { FaStar } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import demoImg from '../../assets/demo-app6.webp';
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

const AppDetails = () => {
  const appDeatialsData = useLoaderData();
  const { id } = useParams();
  const newDetailsData = appDeatialsData.find((a) => Number(id) === a.id);
  const { ratings, image, title, companyName, downloads, ratingAvg, reviews } = newDetailsData;

  console.log(format(downloads));


  return (
    <>
      <section className="py-20 space-y-10">
        <div className="appdetails grid grid-cols-[1fr_3fr] gap-x-10 ">
          <div className="img">
            <img src={image} alt="" className="h-full aspect-auto" />
          </div>
          <div className="details-info">
            <h2 className="text-[32px] font-extrabold text-[#001931]">{title}</h2>
            <p>Developed by <span className="text-linear font-bold">{companyName}</span></p>
            <span className="border border-t border-gray-300 w-full block my-10"></span>
            <div className="info flex justify-start gap-x-6 mb-4">
              <div className="downloads p-1.5  flex-col items-start w-[150px] ">
                <MdOutlineFileDownload size={"40px"} color="oklch(0.77 0.17 161.5)"></MdOutlineFileDownload>
                <span className="text-base font-normal text-[#001931]">Downloads<br /></span>
                <span className="text-[40px] font-extrabold">{format(downloads)}</span>
              </div>
              <div className="reviewNum p-1.5  flex-col items-start  w-[150px] ">
                <FaStar size={"40px"} color="oklch(0.82 0.17 88.9)"></FaStar>
                <span className="text-base font-normal text-[#001931]">Average Ratings<br /></span>
                <span className="text-[40px] font-extrabold">{ratingAvg}</span>
              </div>
              <div className="likeNum p-1.5  flex-col items-start   w-[150px] ">
                <img src={like} alt="" />
                <span className="text-base font-normal text-[#001931]">Average Ratings<br /></span>
                <span className="text-[40px] font-extrabold">{format(reviews)}</span>
              </div>

            </div>
            <button className="btn-green !no-underline">
              Install Now (293 MB)
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
            This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.
            <br />
            A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.
            <br />
            For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.
          </p>
        </div>
      </section >
    </>
  );
};

export default AppDetails;