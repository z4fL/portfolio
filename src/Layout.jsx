import SideRail from "./Components/SideRail";

const Layout = ({ children }) => {
  return (
    <div className="bg-slate-900 relative">
      <SideRail />
      {children}
    </div>
  );
};

export default Layout;
