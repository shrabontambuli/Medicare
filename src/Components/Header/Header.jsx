import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const user = false;
  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-[#1CB5BD]" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/find-doctor"
          className={({ isActive }) => (isActive ? "text-[#1CB5BD]" : "")}
        >
          Find Docter
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/serivces"
          className={({ isActive }) => (isActive ? "text-[#1CB5BD]" : "")}
        >
          Our Serivces
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/works"
          className={({ isActive }) => (isActive ? "text-[#1CB5BD]" : "")}
        >
          How it works
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/reviews"
          className={({ isActive }) => (isActive ? "text-[#1CB5BD]" : "")}
        >
          Reviews
        </NavLink>
      </li>
      {user ? (
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "text-[#1CB5BD]" : "")}
          >
            Dashboard
          </NavLink>
        </li>
      ) : (
        <></>
      )}
    </>
  );
  return (
    <div>
      {/* <nav className='grid grid-cols-1 lg:grid-cols-3 items-center gap-4 lg:mt-5 mt-3'>
                <div className="lg:hidden dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <NavLink to='/' className={({ isActive }) => (isActive ? 'text-[#1CB5BD]' : '')}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/doctor' className={({ isActive }) => (isActive ? 'text-[#1CB5BD]' : '')}>Find Docter</NavLink>
                        </li>
                        <li>
                            <NavLink to='/serivces' className={({ isActive }) => (isActive ? 'text-[#1CB5BD]' : '')}>Our Serivces</NavLink>
                        </li>
                        <li>
                            <NavLink to='/works' className={({ isActive }) => (isActive ? 'text-[#1CB5BD]' : '')}>How it works</NavLink>
                        </li>
                        <li>
                            <NavLink to='/reviews' className={({ isActive }) => (isActive ? 'text-[#1CB5BD]' : '')}>Reviews</NavLink>
                        </li>
                        <div className="flex items-center justify-start">
                            <div>
                                <img className="w-9" src="/icons/fluent_call-32-regular.png" alt="" />
                            </div>
                            <div>
                                <p className="font-semibold">+233554205473</p>
                                <p className="text-xs text-[#BBB]">Mon-Sat 9am - 6am</p>
                            </div>
                        </div>
                    </ul>
                </div>


                <NavLink to='/'>
                    <div className="flex items-center">
                        <img className="lg:w-16 w-10" src="/icons/image 21.png" alt="" />
                        <div>
                            <h2 className="lg:text-3xl text-2xl font-semibold">Medi<span className="text-[#1CB5BD]">care</span></h2>
                        </div>
                    </div>
                </NavLink>
                <div className='mx-auto hide lg:hide2'>
                    <ul className='flex font-serif text-[17px]'>
                        <li>
                            <NavLink to='/' className={({ isActive }) => (isActive ? 'text-[#1CB5BD]' : '')}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/doctor' className={({ isActive }) => (isActive ? 'text-[#1CB5BD]' : '')}>Find Docter</NavLink>
                        </li>
                        <li>
                            <NavLink to='/serivces' className={({ isActive }) => (isActive ? 'text-[#1CB5BD]' : '')}>Our Serivces</NavLink>
                        </li>
                        <li>
                            <NavLink to='/works' className={({ isActive }) => (isActive ? 'text-[#1CB5BD]' : '')}>How it works</NavLink>
                        </li>
                        <li>
                            <NavLink to='/reviews' className={({ isActive }) => (isActive ? 'text-[#1CB5BD]' : '')}>Reviews</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center justify-center lg:justify-end">
                    <div>
                        <img className="w-9" src="/icons/fluent_call-32-regular.png" alt="" />
                    </div>
                    <div>
                        <p className="font-semibold">+233554205473</p>
                        <p className="text-xs text-[#BBB]">Mon-Sat 9am - 6am</p>
                    </div>
                </div>
            </nav> */}

      <div className="navbar fixed z-50 max-w-screen-2xl bg-white font-semibold text-black px-2 lg:px-0 lg:py-6 top-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/">
            <div className="flex items-center">
              <img className="lg:w-16 w-10" src="/icons/image 21.png" alt="" />
              <div>
                <h2 className="lg:text-3xl text-2xl font-semibold">
                  Medi<span className="text-[#1CB5BD]">care</span>
                </h2>
              </div>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>

        <div className="navbar-end gap-3">
          <div className="flex items-center justify-center lg:justify-end">
            <div>
              <img
                className="w-9"
                src="/icons/fluent_call-32-regular.png"
                alt=""
              />
            </div>
            <div>
              <p className="font-semibold">+233554205473</p>
              <p className="text-xs text-[#BBB]">Mon-Sat 9am - 6am</p>
            </div>
          </div>
          {user ? (
            <div className="flex items-center gap-2">
              <img
                title={user?.displayName}
                className="w-12 h-12 border border-[#1CB5BD] rounded-full"
                src={user?.photoURL}
                alt=""
              />
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button className="bg-[#1CB5BD] text-white px-6 py-3 rounded-md">
                Login
              </button>
              <button className="border border-[#1CB5BD] text-[#1CB5BD] px-6 py-3 rounded-md">
                Sign In
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
