


import { useNavigate } from "react-router-dom";

import useAxiosPublic from "../../hooks/UseAxiosPublic";
import UseAuth from "../../hooks/UseAuth";

import toast, { Toaster } from "react-hot-toast";



const SocialLogin = () => {
    const { googleSignIn } = UseAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
           // console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                
                toast.success('Successfully login!')
                navigate('/dashboard');
            })
        })
    }

    return (
        <div className="">
            <form action="" onClick={handleGoogleSignIn}>
            <div className="mx-auto flex h-[50px] w-[200px] items-center overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow">
                        <div className="flex h-full w-[50%] items-center bg-[#3366CC] pl-4 font-semibold text-sm text-white">Sign With</div>
                        <span className="right-0 top-0 h-0 w-0 -rotate-90 border-b-[50px] border-r-[50px] border-b-transparent border-r-[#3366CC] group-hover:hidden"></span>
                        <span className="pr-4 text-4xl font-bold text-[#3366CC]">G+</span>
                    </div>
            </form>
   <Toaster></Toaster>
        </div>
    );
};

export default SocialLogin;