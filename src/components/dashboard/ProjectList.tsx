type product = {
    id: number;
    name: string;
    price: number;
    sales: number;
    category: string;
}

type projectListProps = {
    products?: product[];
}

const ProjectList = ({ products }: projectListProps) => {
    const list = products ?? [];


    return (
        <div className="col-span-12 lg:col-span-3 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col h-full min-h-100]">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-900">Project</h3>
                <button className="px-3 py-1.5 border border-gray-200 text-gray-600 rounded-lg text-xs font-semibold hover:bg-gray-50 transition-colors flex items-center gap-1 shadow-sm">
                    <span>+</span> New
                </button>
            </div>

            <div className="flex-1 flex flex-col gap-4">
                {list.length === 0 ? (<div className="text-sm text-gray-400">No projects found.</div>
                ) : (list.map((item) => {
                    // dicebear icon seed = product name
                    const iconUrl = `https://api.dicebear.com/7.x/shapes/svg?seed=${encodeURIComponent(
                        item.name)}`;

                    return (
                        <div
                            key={item.id}
                            className="flex items-center gap-4 group cursor-pointer p-2 -mx-2 rounded-xl hover:bg-gray-50 transition-colors"
                        >
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:shadow-sm border border-transparent group-hover:border-gray-200 transition-all">
                                <img
                                    src={iconUrl}
                                    alt="icon"
                                    className="w-6 h-6 object-contain mix-blend-multiply"
                                />
                            </div>

                            <div className="min-w-0">
                                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-brand-green transition-colors truncate">
                                    {item.name}
                                </h4>

                                {/* “Due date” এর বদলে dynamic info */}
                                <p className="text-xs text-gray-400">
                                    {item.category} • ${item.price} • Sales: {item.sales}
                                </p>
                            </div>
                        </div>
                    );
                })
                )}
            </div>
        </div>
    );
};

export default ProjectList;
