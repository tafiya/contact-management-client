import { useContext } from 'react';
import logo from '../assets/image/Screenshot 2023-12-20 104907 2.png'
import { AuthContext } from '../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import SocialLogin from './SocialLogin/SocialLogin';

const LoginPage = () => {
    const {signIn}=useContext(AuthContext);
    const navigate =useNavigate();
    const location =useLocation();
  
   

   
    const handleLogin=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
       
       console.log(email,password)
        signIn(email,password)
        .then(result=>{
            const user =result.user;
            toast.success('Successfully login!')
           
            navigate('/dashboard');
        })
    }
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className="w-full max-w-2xl md:py-16 md:px-24 p-8 space-y-3 rounded-xl border bg-gradient-to-t from-[#C2DAFFF5] to-[#EFF1F000]   font-sans mx-auto">
            <div className=' flex justify-center items-center'>
            <img src={logo} className='' alt="" />
            </div>
        {/* Input fields and the form started */}
        <form onSubmit={handleLogin} className="space-y-6 p-8">
            <div className="space-y-2 text-sm">
                <input type="email" name="email" id="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-[#FFFFFFB0] focus:outline-none focus:ring shadow-[#3366CC] shadow-md" required />
            </div>
            <div className="space-y-2 text-sm">
                
                <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-lg border border-[#FFFFFFB0] focus:outline-none focus:ring shadow-[#3366CC] shadow-md" required />
              
            </div>
            {/* Sign in Button */}
            <button className="text-lg rounded-xl relative p-[10px] block w-full bg-[#3366CC] text-white border-y-4 duration-500 overflow-hidden focus:[#3366CC]  z-50 group">
                Log In
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
            <Link to='/signup' className="underline hover:text-indigo-600">
                Sign up
            </Link>
        </p>
    </div>

        </div>
     
    );
};

export default LoginPage;