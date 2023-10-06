import { NavLink } from "react-router-dom";
import './Header.css'



const Header = () => {
    return (
        <div>
            <nav className='grid grid-cols-1 lg:grid-cols-3 items-center gap-4 lg:mt-5 mt-3'>
                <NavLink to='/'>
                    <div className="flex items-center">
                        <img className="lg:w-16 w-10" src="/public/icons/image 21.png" alt="" />
                        <div>
                            <h2 className="lg:text-3xl text-2xl font-semibold">Medi<span className="text-[#1CB5BD]">care</span></h2>
                        </div>
                    </div>
                </NavLink>
                <div className='mx-auto'>
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
                        <img className="w-9" src="/public/icons/fluent_call-32-regular.png" alt="" />
                    </div>
                    <div>
                        <p className="font-semibold">+233554205473</p>
                        <p className="text-xs text-[#BBB]">Mon-Sat 9am - 6am</p>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;