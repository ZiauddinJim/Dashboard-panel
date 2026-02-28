import { MdOutlineArrowOutward } from 'react-icons/md';

type OverviewType = {
    totalUsers: number;
    activeUsers: number;
    revenue: number;
    growth: number;
};

interface DashboardStatsProps {
    overview?: OverviewType;
}

const formatNumber = (num: number) => {
    if (!num) return '0';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
    return num.toString();
};

const DashboardStats = ({ overview }: DashboardStatsProps) => {
    return (
        <>
            {/* Total Projects -> mapped to totalUsers */}
            <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-brand-green rounded-2xl p-5 text-white shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[140px]">
                {/* Decorative corner */}
                <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

                <div className="flex justify-between items-start">
                    <h3 className="text-white/90 font-medium">Total Users</h3>
                    <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors z-10">
                        <MdOutlineArrowOutward className="text-white" />
                    </button>
                </div>

                <div className="z-10">
                    <h2 className="text-4xl font-bold mb-2">{overview ? formatNumber(overview.totalUsers) : '0'}</h2>
                    <div className="flex items-center gap-2 text-xs text-white/80">
                        <span className="bg-white/20 px-1.5 py-0.5 rounded text-[10px] font-medium">+{overview?.growth || '0'}%</span>
                        <span>Increased from last month</span>
                    </div>
                </div>
            </div>

            {/* Ended Projects -> mapped to activeUsers */}
            <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col justify-between min-h-[140px]">
                <div className="flex justify-between items-start">
                    <h3 className="text-gray-900 font-medium">Active Users</h3>
                    <button className="w-8 h-8 rounded-full border border-gray-800 cursor-pointer flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <MdOutlineArrowOutward className="text-gray-600" />
                    </button>
                </div>

                <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">{overview ? formatNumber(overview.activeUsers) : '0'}</h2>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="bg-green-50 text-brand-green px-1.5 py-0.5 rounded text-[10px] font-medium">+4%</span>
                        <span>Increased from last month</span>
                    </div>
                </div>
            </div>

            {/* Running Projects -> mapped to revenue (as a number) */}
            <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col justify-between min-h-[140px]">
                <div className="flex justify-between items-start">
                    <h3 className="text-gray-900 font-medium">Total Revenue</h3>
                    <button className="w-8 h-8 rounded-full border border-gray-800 cursor-pointer flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <MdOutlineArrowOutward className="text-gray-600" />
                    </button>
                </div>

                <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">{overview ? formatNumber(overview.revenue) : '0'}</h2>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="bg-green-50 text-brand-green px-1.5 py-0.5 rounded text-[10px] font-medium">+2%</span>
                        <span>Increased from last month</span>
                    </div>
                </div>
            </div>

            {/* Pending Project -> static map or small value */}
            <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col justify-between min-h-[140px]">
                <div className="flex justify-between items-start">
                    <h3 className="text-gray-900 font-medium">Growth</h3>
                    <button className="w-8 h-8 rounded-full border border-gray-800 cursor-pointer flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <MdOutlineArrowOutward className="text-gray-600" />
                    </button>
                </div>

                <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">{overview ? overview.growth : '0'}</h2>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>On Discuss</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardStats;
