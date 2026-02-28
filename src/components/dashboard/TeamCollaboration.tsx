// type declaration
type user = {
    id: number;
    name: string;
    email: string;
    status: string;
    joinDate: string;
}
type UserListProps = {
    users?: user[];
}

// Status badge create
const getStatusStyle = (status: string) => {
    const s = status.toLowerCase();
    if (s.includes("active")) return "text-brand-green bg-green-50 border border-green-200";
    if (s.includes("pending")) return "text-yellow-600 bg-yellow-50 border border-yellow-200";
    if (s.includes("inactive") || s.includes("blocked")) return "text-red-500 bg-red-50 border border-red-200";
    return "text-gray-600 bg-gray-100 border border-gray-200";
};

const TeamCollaboration = ({ users }: UserListProps) => {

    const team = users ?? [];

    return (
        <div className="col-span-12 lg:col-span-5 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-900">Team Collaboration</h3>
                <button className="px-3 py-2 border-2 border-brand-green text-brand-green rounded-full font-semibold hover:bg-gray-50 transition-colors flex items-center gap-1 shadow-sm">
                    <span>+</span> Add Member
                </button>
            </div>

            <div className="flex-1 flex flex-col gap-4">
                {team.length === 0 ? (<div className="text-sm text-gray-400">No team members found.</div>
                ) : (team.map((member) => {
                    const avatar = `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(
                        member.name)}`;
                    const statusColor = getStatusStyle(member.status);

                    return (
                        <div
                            key={member.id}
                            className="flex items-center justify-between p-2 -mx-2 rounded-xl border border-transparent hover:border-gray-100 hover:bg-gray-50 transition-all cursor-pointer"
                        >
                            <div className="flex items-center gap-3 min-w-0">
                                <div className="w-10 h-10 rounded-full bg-blue-50 overflow-hidden border border-gray-200 flex-shrink-0">
                                    <img src={avatar} alt={member.name} className="w-full h-full object-cover" />
                                </div>

                                <div className="min-w-0">
                                    <h4 className="text-sm font-bold text-gray-900 truncate">
                                        {member.name}
                                    </h4>
                                    <p className="text-xs text-gray-500 truncate">
                                        {member.email} • Joined:{" "}
                                        <span className="font-semibold text-gray-700">
                                            {member.joinDate}
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div className={`px-2.5 py-1 rounded text-[10px] font-bold ${statusColor}`}>
                                {member.status}
                            </div>
                        </div>
                    );
                })
                )}
            </div>
        </div>
    );
};

export default TeamCollaboration;
