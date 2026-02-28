import { MdSearch, MdOutlineMail, MdMenu } from 'react-icons/md';
import { IoNotificationsOutline } from "react-icons/io5";

interface HeaderProps { onMenuClick?: () => void; }

const Header = ({ onMenuClick }: HeaderProps) => {
    return (
        <header className="h-20 w-full bg-light flex items-center justify-between px-4 md:px-8 border-b border-gray-100 lg:border-none">
            <div className="flex items-center gap-4 w-full md:w-auto">
                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-brand-green hover:border-brand-green transition-colors shadow-sm shrink-0"
                    onClick={onMenuClick}
                    aria-label="Open Menu"
                >
                    <MdMenu className="text-xl" />
                </button>

                {/* Search Bar */}
                <div className="relative w-full md:w-96">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MdSearch className="text-gray-400 text-xl" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-12 py-2.5 bg-white border border-gray-100 lg:border-transparent rounded-xl text-sm placeholder-gray-400 focus:border-brand-green focus:ring-brand-green focus:outline-none shadow-sm"
                        placeholder="Search task"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center hidden sm:flex">
                        <span className="text-gray-400 text-xs px-1.5 py-0.5 border border-gray-200 rounded font-medium">
                            ⌘F
                        </span>
                    </div>
                </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2 sm:gap-5 ml-4">
                <button className="hidden sm:flex w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:text-brand-green hover:border-brand-green transition-colors shadow-sm">
                    <MdOutlineMail className="text-xl" />
                </button>
                <div className="relative hidden sm:block">
                    <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:text-brand-green hover:border-brand-green transition-colors shadow-sm">
                        <IoNotificationsOutline className="text-xl" />
                    </button>
                </div>

                {/* User Profile */}
                <div className="flex items-center gap-3 pl-0 sm:pl-2">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-gray-200 border-2 border-white shadow-sm ring-2 ring-gray-100 flex-shrink-0">
                        <img
                            src="https://api.dicebear.com/7.x/notionists/svg?seed=Michael"
                            alt="User profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="hidden lg:block">
                        <h4 className="text-sm font-bold text-gray-900 leading-tight">Totok Michael</h4>
                        <p className="text-xs text-gray-500">tmichael20@mail.com</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
