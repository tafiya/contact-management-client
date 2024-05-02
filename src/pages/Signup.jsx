
import logo from '../assets/image/Screenshot 2023-12-20 104907 2.png'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosPublic from '../hooks/UseAxiosPublic';

import toast, { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin/SocialLogin';


const Signup = () => {
    const {register,handleSubmit,reset,formState: { errors }} = useForm();
    const {createUser,updateUserProfile}= useContext(AuthContext)
    const navigate =useNavigate(); 
    const axiosPublic = useAxiosPublic(); 
    const onSubmit = data =>{
        
        createUser(data.email,data.password)
        .then(result=>{
            const loggedUser=result.user;
            //console.log(loggedUser);
            updateUserProfile(data.name)
            .then(()=>{
              const userInfo = {
                name: data.name,
                email: data.email
            }
            console.log(userInfo);
              axiosPublic.post('/users', userInfo)
                .then(res => {
                  if (res.data.insertedId) {
                   // console.log('user added to the database')
                    reset();
                    toast.success('Successfully login!')
                    navigate('/dashboard');
                  }
                })
            })
            .catch(error => console.log(error))
        })
    }
    return (
        <div className='min-h-screen flex items-center justify-center'>
        <div className="w-full max-w-2xl md:py-16 md:px-24 p-8 space-y-3 rounded-xl border bg-gradient-to-t from-[#C2DAFFF5] to-[#EFF1F000]   font-sans mx-auto">
        <div className=' flex justify-center items-center'>
        <img src={logo} className='' alt="" />
        </div>
    {/* Input fields and the form started */}
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-8">
    <div className="space-y-2 text-sm">
    <input type="text"  {...register("name",{ required: true })} placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border border-[#FFFFFFB0] focus:outline-none focus:ring shadow-[#3366CC] shadow-md"   />
    {errors.name && <span className=" text-red-600">This field is required</span>}
           
        </div>
        <div className="space-y-2 text-sm">
            <input type="email" {...register("email",{ required: true })} placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-[#FFFFFFB0] focus:outline-none focus:ring shadow-[#3366CC] shadow-md"   />
            {errors.email && <span className=" text-red-600">This field is required</span>}
        </div>
        <div className="space-y-2 text-sm">
            <input type="password" placeholder="Password" {...register("password",{ required: true,minLength:6, maxLength: 20,
                pattern:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/})} className="w-full px-4 py-3 rounded-lg border border-[#FFFFFFB0] focus:outline-none focus:ring shadow-[#3366CC] shadow-md"/>
                {errors.password?.type=='required' && <span className=" text-red-600">password is required</span>}
                {errors.password?.type=='minLength' && <span className=" text-red-600">password must be 6 characters</span>}
                {errors.password?.type=='maxLength' && <span className=" text-red-600">password must be less then 20 characters</span>}
                {errors.password?.type=='pattern' && <span className=" text-red-600">password must have One UpperLetter ,one small letter and one special character</span>}
          
        </div>
        {/* Sign in Button */}
        <button className="text-lg rounded-xl relative p-[10px] block w-full bg-[#3366CC] text-white border-y-4 duration-500 overflow-hidden focus:[#3366CC]  z-50 group">
            Sign Up
            <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                Let&apos;s go
            </span>
            <span className="bg-[#3366CC] absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
            <span className="bg-[#3366CC] absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
            <span className="bg-[#3366CC] absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
            <span className="bg-[#3366CC] absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
        </button>
    </form>
    <div className="flex items-center pt-4 space-x-2">
        <div className="flex-1 h-px bg-gray-300"></div>
        <p className="text-sm text-gray-600">Login with social accounts</p>
        <div className="flex-1 h-px bg-gray-300"></div>
    </div>
    {/* Social icons */}
    <div >
           <SocialLogin></SocialLogin>
    </div>
    <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
        Don&apos;t have an account?
        <Link to='/login' className="underline hover:text-indigo-600">
           Login
        </Link >
    </p>
</div>
<Toaster />
  {/* sign with google */}
 
    </div>
    );
};

export default Signup;