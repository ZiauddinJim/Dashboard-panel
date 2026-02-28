import DashboardLayout from '../../components/layout/DashboardLayout';
import DashboardStats from '../../components/dashboard/DashboardStats';
import ProjectAnalytics from '../../components/dashboard/ProjectAnalytics';
import Reminders from '../../components/dashboard/Reminders';
import ProjectList from '../../components/dashboard/ProjectList';
import TeamCollaboration from '../../components/dashboard/TeamCollaboration';
import ProjectProgress from '../../components/dashboard/ProjectProgress';
import TimeTracker from '../../components/dashboard/TimeTracker';
import { useQuery } from '@tanstack/react-query';
import { getDashboardAll } from '../../api/dashboard.api';

const DashboardPage = () => {
    // Fetch dashboard data
    const { data: dashboardData, isLoading, isError } = useQuery({
        queryKey: ['dashboardData'],
        queryFn: getDashboardAll,
    });

    return (
        <DashboardLayout>
            {/* Header Content */}
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Dashboard</h1>
                    <p className="text-gray-500 text-sm">Plan, prioritize, and accomplish your tasks with ease.</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-5 py-3 bg-linear-to-r  from-brand-green to-brand-green-light  hover:from-brand-green-light  hover:to-brand-green  text-white cursor-pointer font-medium rounded-full shadow-sm transition-colors flex items-center justify-center gap-2">
                        <span className="text-lg leading-none">+</span> Add Project
                    </button>
                    <button className="px-5 py-3 bg-white border-2 border-brand-green hover:text-brand-green text-brand-green cursor-pointer font-medium rounded-full shadow-sm transition-colors flex justify-center items-center">
                        Import Data
                    </button>
                </div>
            </div>

            {/* Error State */}
            {isError && (
                <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100 mb-6 font-medium">
                    Failed to load dashboard data. Please try again later.
                </div>
            )}

            {/* Main Grid */}
            <div className="grid grid-cols-12 gap-6 w-full">
                {isLoading ? (
                    <div className="col-span-12 flex justify-center items-center h-64">
                        <div className="w-10 h-10 border-4 border-gray-200 border-t-brand-green rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <>
                        {/* Top Statistics Cards */}
                        <DashboardStats overview={dashboardData?.overview} />

                        {/* Middle Row: Analytics, Reminders, Project List */}
                        <ProjectAnalytics analytics={dashboardData?.analytics} />
                        <Reminders />
                        <ProjectList products={dashboardData?.products} />

                        {/* Bottom Row: Team Collaboration, Project Progress, Time Tracker */}
                        <TeamCollaboration users={dashboardData?.users} />
                        <ProjectProgress />
                        <TimeTracker />
                    </>
                )}
            </div>
        </DashboardLayout>
    );
};

export default DashboardPage;