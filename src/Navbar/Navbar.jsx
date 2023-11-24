import { Link
 } from "react-router-dom";

const Navbar = () => {
    const navOptions = <>
    
    </>



    return (
        <>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/recommendation">Recommendation</Link></li>
        <li><Link to="/order">Order</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl text-fuchsia-500 font-weight: 400 font-variant-numeric: oldstyle-nums ">Yellow RRTS</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/recommendation">Recommendation</Link></li>

      <li><Link to="/order">Order</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
  <div>
  <a className="btn"><Link to="/Register">Register</Link></a>
  
  </div>
  <div>
  <a className="btn"><Link to="/Login">Login</Link></a>
  
  </div>
  </div>
  
</div>
        </>
    );
};
export default Navbar;
