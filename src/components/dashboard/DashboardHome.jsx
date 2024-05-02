
import usePosts from "../../hooks/usePosts";
import DashboardNavbar from "./DashboardNavbar";
import pdf from "../../assets/image/Send Email.png"
import action from "../../assets/image/Delete.png"

import { useReactToPrint } from "react-to-print";
import { useEffect, useRef, useState } from "react";
 const DashboardHome = ({sidebarToggle,setSidebarToggle}) => {
    const[contacts,loading, refetch]=usePosts();
    const conponentPDF= useRef();
    const [userData, setUserdata]= useState([]);

    useEffect( ()=>{
        const registerUserdata= async()=>{
         axios.get("http://localhost:5300/contacts")  
         .then(res=>setUserdata(res.data) )
         .catch(error=>console.log(error)); 

        }
        registerUserdata();
    },[]);

    const generatePDF= useReactToPrint({
        content: ()=>conponentPDF.current,
        documentTitle:"Userdata",
        onAfterPrint:()=>alert("Data saved in PDF")
    });
       
    // const pdfRef = useRef();
    // const downloadPDF=()=>{

    //     const input= pdfRef.current;
    //     html2canvas(input).then((canvas)=> {
    //     const imgData= canvas.toDataURL('image/png');
    //     const pdf =new jsPDF('p', 'mm', 'a4', true);
    //     const pdfWidth= pdf.internal.pageSize.getWidth();
    //     const pdfHeight =pdf.internal.pageSize.getHeight();
    //     const imgWidth =canvas.width;
    //     const imgHeight= canvas.height;
    //     const ratio = Math.min(pdfWidth/imgWidth, pdfHeight / imgHeight);
    //     const imgX =(pdfWidth- imgWidth * ratio) / 2;
    //     const imgY= 30;
    //     pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth *ratio, imgHeight* ratio);
    //     pdf.save('invoice.pdf');
    //     });
    // }

    return (
    
            <div className={`${sidebarToggle? " " :" ml-64 " } w-full`}>
            <DashboardNavbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} ></DashboardNavbar>
           
            
    <div className="overflow-x-auto" >
    <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6" ref={conponentPDF}>
        <thead>
            <tr className="bg-[#0095FF] text-white">
                <th className="py-4 px-6 text-lg text-left border-b">Product Image</th>
                <th className="py-4 px-6 text-lg text-left border-b">Product Name</th>
                <th className="py-4 px-6 text-lg text-left border-b">Price</th>
                <th className="py-4 px-6 text-lg border-b text-center">Action</th>
            </tr>
        </thead>
        <tbody>
            {
                contacts.map((contact)=>
                <tr key={contact._id}className="hover:bg-gray-50 border-b transition duration-300">
                <td className="py-4 px-4 flex justify-start">
                 {contact.name}
                </td>
                <td className="py-4 px-6 border-b text-xl font-medium">{contact.
phone}</td>
                <td className="py-4 px-6 border-b text-lg font-medium">{contact.email}</td>
                <td className="py-4 px-6 border-b flex mx-auto gap-6 justify-center items-center text-end">
                    <button><img src={pdf} alt="" /></button>
                    <button ><img src={action} alt=""/> </button>
                </td>
            </tr>
            )
            }
          
           
        </tbody>
    </table>
    <button className="btn btn-primary" onClick={generatePDF}>Download PDF</button>
</div>
            
        </div>
);
};

export default DashboardHome;
