import { Toaster } from "react-hot-toast";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Contact></Contact>
            <Toaster
  position="top-center"
  reverseOrder={false}
/>
            
        </div>
    );
};

export default Home;