import toast from 'react-hot-toast';
import mail from '../assets/image/normal_604d33453977c.dfd6efd6.svg'
import useAxiosPublic from '../hooks/UseAxiosPublic';
import {
    FacebookShareButton,
    WhatsappShareButton,
    WhatsappIcon,
    FacebookIcon,
  } from 'react-share';
import { useForm } from 'react-hook-form';
const Contact = () => {
    const {register,handleSubmit,reset,formState: { errors }} = useForm();
    const shareUrl = 'https://www.pakkamarwadi.tk/';
    const axiosPublic =useAxiosPublic()
    const onSubmitContact = data =>{
      
     const postContact={
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message
    }
      console.log(postContact)
      axiosPublic.post('/contacts', postContact)
      .then(res => {
        if (res.data.insertedId) {
         // console.log('user added to the database')
          reset();
          toast.success('Successfully Send!')
          
        }
      })
  .catch(error => console.log(error))
      
   
    }
    return (
        
<div className="max-w-screen-xl mx-auto my-12 p-6 bg-white sm:px-8 sm:py-10 lg:px-12 lg:py-16">
<div className="flex flex-col sm:flex-row justify-between space-x-0 sm:space-x-12">
  <div className="w-full sm:w-1/2 mb-8 sm:mb-0 md:p-16">
      {/* Left side form */}
    <h2 className="md:text-5xl text-3xl text-[#265073] font-bold mb-10">Contact Us</h2>
    <form onSubmit={handleSubmit(onSubmitContact)} >
      <div className="flex flex-col space-y-8 mb-4">
        <input className="flex h-12 w-full rounded-2xl bg-[#ccdef7f5] px-3 py-2 text-xl font-medium focus:outline-none"  {...register("name",{ required: true })} placeholder="Name" type="text" />
        <input className="flex h-12 w-full rounded-2xl bg-[#ccdef7f5] px-3 py-2 text-xl font-medium focus:outline-none" {...register("email",{ required: true })}  placeholder="Email" type="email" />
        <input className="flex h-12 w-full rounded-2xl bg-[#ccdef7f5] px-3 py-2 text-xl font-medium focus:outline-none" placeholder="Phone" {...register("phone",{ required: true })}  type="number" />
        <textarea className="textarea text-xl font-medium rounded-2xl bg-[#ccdef7f5] " placeholder="Message" {...register("message",{ required: true })} ></textarea>
      </div>
      <button className="inline-flex items-center rounded-2xl justify-center text-sm font-medium  h-12  px-4 py-4 w-full bg-[#3366CC] text-white">
      Send Message
      </button>
    </form>
   
    <div className="flex justify-center mt-8 space-x-4">
    <FacebookShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>

        <WhatsappShareButton
          url={shareUrl}
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>
           
        </div>
  
  </div>
  {/* Right side content */}
  <div className="w-full sm:w-1/2">
  <img src={mail} className=' w-full' alt=""  />
  </div>
</div>
</div> 

    );
};

export default Contact;