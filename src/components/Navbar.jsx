import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);
    return (
        <nav className="flex items-center justify-between bg-[#3366CC] px-4 py-2 text-white mb-24">
        <div className=" rounded-2xl px-3 py-2 text-xl font-semibold text-white ">
        <h2 className=" text-4xl font-bold">DEMO LOGO</h2>
        </div>
        <ul className="hidden items-center justify-between gap-10 md:flex">
        <input type="search" name="Search" placeholder="Search" className="w-[457px] h-[43.61px] p-4 rounded" id="" />
        <button className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90"><Link to='/login'>Log In</Link></button>
        <button className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90"><Link to="/signup">Register</Link></button>
        </ul>
        <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
          {dropDownState && (
            <ul className=" z-10  gap-2 p-6 bg-[#393E46]  absolute right-0 top-11 flex w-[300px] flex-col  rounded-lg   text-base ">
          <input type="search" name="Search" placeholder="Search" className=" p-2 mt-6 rounded" id="" />
        <button className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90"><Link to='/login'>Log In</Link></button>
        <button className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90"><Link to="/signup">Register</Link></button>
            </ul>
          )}
        </div>
</nav>
   
    );
};

export default Navbar;
