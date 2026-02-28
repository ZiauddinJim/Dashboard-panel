import { MdOutlineVideocam } from 'react-icons/md';

const Reminders = () => {
    return (
        <div className="col-span-12 lg:col-span-3 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6">Reminders</h3>
                <h4 className="text-xl font-bold text-brand-green leading-tight mb-2">Meeting with Arc Company</h4>
                <p className="text-sm text-gray-500 mb-6">Time : 02.00 pm - 04.00 pm</p>
            </div>

            <button className="  w-full py-3 bg-linear-to-r  from-brand-green to-brand-green-light  hover:from-brand-green-light  hover:to-brand-green  text-white  rounded-xl  font-medium  transition-all  duration-300  flex items-center justify-center gap-2  shadow-sm">
                <MdOutlineVideocam className="text-xl" />
                <span>Start Meeting</span>
            </button>
        </div>
    );
};

export default Reminders;
