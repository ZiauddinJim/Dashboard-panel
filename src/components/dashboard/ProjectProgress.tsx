
const ProjectProgress = () => {
    return (
        <div className="col-span-12 lg:col-span-4 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Project Progress</h3>

            <div className="flex-1 flex flex-col items-center justify-center">
                {/* Simple Semi-circle Gauge representation with CSS */}
                <div className="relative w-48 h-24 overflow-hidden mb-4">
                    {/* Background Arc */}
                    <div className="absolute top-0 left-0 w-48 h-48 rounded-full border-[1.5rem] border-repeating-linear border-gray-200"
                        style={{
                            borderStyle: 'solid',
                            borderColor: '#e5e7eb',
                            borderBottomColor: 'transparent',
                            borderRightColor: 'transparent',
                            transform: 'rotate(45deg)',
                            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(156, 163, 175, 0.2) 5px, rgba(156, 163, 175, 0.2) 10px)'
                        }}>
                    </div>

                    {/* Completed Arc (Green) */}
                    <div className="absolute top-0 left-0 w-48 h-48 rounded-full border-[1.5rem]"
                        style={{
                            borderColor: '#1d5b3c',
                            borderBottomColor: 'transparent',
                            borderRightColor: 'transparent',
                            transform: 'rotate(45deg)',
                            clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' // Simplistic way to limit
                        }}>
                    </div>

                    {/* Inner Value */}
                    <div className="absolute bottom-0 left-0 w-full flex flex-col items-center justify-end pb-2">
                        <span className="text-4xl font-bold text-gray-900">41%</span>
                        <span className="text-xs text-gray-500">Project Ended</span>
                    </div>
                </div>

                {/* Legend */}
                <div className="flex items-center gap-4 mt-6 text-xs text-gray-500">
                    <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-brand-green"></span>
                        <span>Completed</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-brand-green-light"></span>
                        <span>In Progress</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-repeating-linear overflow-hidden border border-gray-200"
                            style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, #9ca3af 2px, #9ca3af 4px)' }}>
                        </span>
                        <span>Pending</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectProgress;
