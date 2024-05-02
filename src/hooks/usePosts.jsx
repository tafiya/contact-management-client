

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./UseAxiosPublic";



const usePosts = () => {
     const axiosPublic = useAxiosPublic();
 

    const {data: contacts = [], isPending: loading, refetch} = useQuery({
        queryKey: ['contacts'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/contacts');
            return res.data;
        }
    })


    return [contacts,loading, refetch]
}

export default usePosts;