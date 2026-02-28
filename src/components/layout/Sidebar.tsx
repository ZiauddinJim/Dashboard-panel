import { NavLink } from 'react-router-dom';
import logo from "../../../public/logo.png"
import { MdOutlineSpaceDashboard, MdCheckCircleOutline, MdOutlineCalendarToday, MdOutlineBarChart, MdOutlinePeopleOutline, MdOutlineSettings, MdOutlineHelpOutline, MdOutlineLogout } from 'react-icons/md';

const Sidebar = () => {
  // Menu Items & generalItems static data create
  const menuItems = [
    { label: 'Dashboard', icon: MdOutlineSpaceDashboard, path: '/dashboard', badge: null },
    { label: 'Tasks', icon: MdCheckCircleOutline, path: '/tasks', badge: '12+' },
    { label: 'Calendar', icon: MdOutlineCalendarToday, path: '/calendar', badge: null },
    { label: 'Analytics', icon: MdOutlineBarChart, path: '/analytics', badge: null },
    { label: 'Team', icon: MdOutlinePeopleOutline, path: '/team', badge: null },
  ];

  const generalItems = [
    { label: 'Settings', icon: MdOutlineSettings, path: '/settings' },
    { label: 'Help', icon: MdOutlineHelpOutline, path: '/help' },
    { label: 'Logout', icon: MdOutlineLogout, path: '/login' },
  ];

  const NavItem = ({ item }: { item: any }) => {
    return (
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          `flex items-center justify-between px-4 py-3 mb-1 rounded-xl transition-colors ${isActive
            ? 'bg-brand-green-pale text-brand-green font-semibold relative'
            : 'text-text-muted hover:bg-gray-50'}`}>
        {({ isActive }) => (<>{isActive && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-brand-green rounded-r-md"></div>
        )}
          <div className="flex items-center gap-3">
            <item.icon className="text-xl" />
            <span>{item.label}</span>
          </div>
          {item.badge && (
            <span className="bg-brand-green text-white text-xs px-2 py-0.5 rounded-full font-medium">
              {item.badge}
            </span>)}</>
        )}
      </NavLink>
    );
  };

  return (
    <div className="w-64 h-full bg-white border-r border-gray-100 flex flex-col pt-8 pb-6 px-4">
      {/* Logo */}
      <div className="flex items-center gap-2 px-2 mb-10">
        <img className='w-10 h-10' src={logo} alt="" />
        <span className="text-xl font-bold font-sans text-gray-800">Donezo</span>
      </div>

      {/* Menu Sections */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="mb-8">
          <p className="px-4 text-xs font-semibold text-gray-400 mb-4 tracking-wider">MENU</p>
          <nav>
            {menuItems.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
          </nav>
        </div>

        <div>
          <p className="px-4 text-xs font-semibold text-gray-400 mb-4 tracking-wider">GENERAL</p>
          <nav>
            {generalItems.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom Promo Card */}
      <div className="mt-auto px-4">
        <div className="bg-brand-green-dark rounded-2xl p-4 text-center text-white relative overflow-hidden">
          {/* Decorative background shapes */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-green-light rounded-full opacity-20 blur-xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-green rounded-full opacity-30 blur-xl"></div>

          <div className="relative z-10">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
              <MdOutlineSpaceDashboard className="text-white text-sm" />
            </div>
            <h4 className="font-semibold text-sm mb-1">Download our Mobile App</h4>
            <p className="text-xs text-white/70 mb-4">Get easy in another way</p>
            <button className="w-full py-2 bg-brand-green hover:bg-brand-green-light transition-colors rounded-lg text-sm font-medium">
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
