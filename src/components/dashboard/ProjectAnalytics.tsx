
type Analytic = {
    date: string;
    views: number;
    clicks: number;
    conversions: number;
}
type AnalyticsProps = {
    analytics?: Analytic[];
}

const ProjectAnalytics = ({ analytics }: AnalyticsProps) => {
    const list = analytics ?? [];
    console.log(list);

    // Mock data for the bar chart
    const data = [
        { day: 'S', value: 40, type: 'pattern' },
        { day: 'M', value: 65, type: 'solid', color: 'bg-brand-green' },
        { day: 'T', value: 80, type: 'solid', color: 'bg-brand-green-light', isHighlight: true, percent: '74%' },
        { day: 'W', value: 95, type: 'solid', color: 'bg-brand-green-dark' },
        { day: 'T', value: 45, type: 'pattern' },
        { day: 'F', value: 55, type: 'pattern' },
        { day: 'S', value: 60, type: 'pattern' },
    ];

    return (
        <div className="col-span-12 lg:col-span-6 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col h-full min-h-75">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-900">Project Analytics</h3>
            </div>

            <div className="flex-1 flex items-end justify-between gap-2 mt-4 relative">
                {data.map((item, index) => (
                    <div key={index} className="flex flex-col items-center flex-1 group">
                        <div className="relative w-full flex justify-center h-48 items-end">
                            {item.isHighlight && (
                                <div className="absolute -top-8 bg-brand-green-pale text-brand-green text-xs font-bold px-2 py-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                    {item.percent}
                                </div>
                            )}

                            {item.type === 'solid' ? (
                                <div className={`w-full max-w-12 rounded-t-full rounded-b-full ${item.color} transition-all duration-500 ease-out`}
                                    style={{ height: `${item.value}%` }}
                                ></div>
                            ) : (
                                <div
                                    className="w-full max-w-12 rounded-t-full rounded-b-full bg-repeating-linear overflow-hidden"
                                    style={{
                                        height: `${item.value}%`,
                                        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(156, 163, 175, 0.2) 5px, rgba(156, 163, 175, 0.2) 10px)'
                                    }}
                                >
                                    <div className="w-full h-full border border-gray-200 rounded-t-full rounded-b-full"></div>
                                </div>
                            )}
                        </div>
                        <span className="text-xs font-medium text-gray-400 mt-4">{item.day}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectAnalytics;
