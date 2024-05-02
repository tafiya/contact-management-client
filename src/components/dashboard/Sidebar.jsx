import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import logo from '../../assets/image/Screenshot 2023-12-20 104907 2.png'
const Sidebar = ({sidebarToggle}) => {
    return (
<div className={`${sidebarToggle ? " hidden " : " block "}w-64 bg-[#E6E6E6] fixed h-full  px-4`}>
    <div className=" my-2 mb-4 bg-white justify-center flex p-2">
        <img src={logo} alt="" />
       
    </div>
    <hr />
    <ul className="mt-8 text-white font bold">
        <li>
         <Link className="px-3 text-[#3366CC] text-md font-bold "> <IoIosMail className="  inline-block w-7 h-8 text-black -mt-2" />Contact Management </Link>
        </li>
    </ul>

</div>
    );
};

export default Sidebar;