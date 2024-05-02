import { useContext, useRef, useState } from "react";
import { FaBars, FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, Navigate } from "react-router-dom";
import toast from "react-hot-toast";



const DashboardNavbar = ({sidebarToggle,setSidebarToggle}) => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();
    const {user,logOut}=useContext(AuthContext);
    const handleLogout=()=>{
        logOut()
        .then(()=>{
          toast('logOut...!', {
            icon: '👏',
          });
          Navigate('/dashboard');
    
        })
        .catch(error=>console.log(error));
      }
   
    return (
                <nav className="flex items-center justify-between bg-white px-4 py-2 text-[#3366CC] mb-24">
                <div className="flex items-center text-xl font-semibold text-[#3366CC] ">
                <FaBars className=" text-[#3366CC] me-4 cursor-pointer" onClick={()=>{ setSidebarToggle(!sidebarToggle)}}/>
                <h2 className=" text-4xl font-bold">Contact Management</h2>
                </div>
                <ul className="hidden items-center justify-between gap-6 md:flex">
                <div className=" relative md:w-65">
               <span className=" flex items-center pl-2">
                       
                     <input type="text" className=" border border-[#3366CC] w-full px-4 py-2 pr-12 rounded shadow outline-none hidden md:block" />
                        <button className="-ml-8 p-1 bg- focus:outline-none bg-[#3366CC] text-white"> <FaSearch></FaSearch></button>
                  </span>
              </div>
              <div className=" text-[#3366CC]">
                  <FaBell className=" w-6 h-6"></FaBell>
             </div>
             {
              user ?<>
             
                <div className="dropdown ml-2  dropdown-end text-black">
                <label tabIndex={0} className="mt-1"><button><FaUserCircle className=" text-[#3366CC] w-6 h-6 mt-1"></FaUserCircle></button></label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a className="text-[#265073]  text-lg font-bold">{user.displayName}</a></li>
                  <li><a><button className="but text-accent border-0"  onClick={handleLogout}>Logout</button></a></li>

                </ul>
              </div>
             
              
              </>
                :
                <>
                 <Link to='/login'><button ><FaUserCircle className=" text-[#3366CC] w-6 h-6 mt-1"></FaUserCircle></button></Link>
                </>
            }
          
                </ul>
                <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
                  {dropDownState && (
                    <ul className=" z-10  gap-2 p-6 bg-white  absolute right-0 top-11 flex w-[300px] flex-col  rounded-lg   text-base ">
                   <div className=" relative md:w-65">
               <span className=" flex items-center pl-2">
                       
                     <input type="text" className=" border bg-[#3366CC] px-4 py-2 pr-12 rounded shadow outline-none hidden md:block" />
                        <button className="-ml-8 p-1 bg- focus:outline-none bg-[#3366CC] text-white"> <FaSearch></FaSearch></button>
                  </span>
              </div>
              <div className=" text-[#3366CC]">
                  <FaBell className=" w-6 h-6"></FaBell>
             </div>
             {
              user ?<>
             
                <div className="dropdown ml-2  dropdown-end text-black">
                <label tabIndex={0} className="mt-1"><button><FaUserCircle className=" text-[#3366CC] w-6 h-6 mt-1"></FaUserCircle></button></label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a className="text-[#265073]  text-lg font-bold">{user.displayName}</a></li>
                  <li><a><button className="but text-accent border-0"  onClick={handleLogout}>Logout</button></a></li>

                </ul>
              </div>
             
              
              </>
                :
                <>
                 <Link to='/login'><button ><FaUserCircle className=" text-[#3366CC] w-6 h-6 mt-1"></FaUserCircle></button></Link>
                </>
            }
                    </ul>
                  )}
                </div>
        </nav>
    );
};

export default DashboardNavbar;