import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import UserCard from "../components/UserProfileAccordion";
import { useState } from "react";
function App() {
  const [booleanVal, setBooleanVal] = useState(false);
  return (
    <div className="App">
      <Navbar booleanVal={booleanVal} setBooleanVal={setBooleanVal} />
      {
        <Box className={
          booleanVal
            ? "opacity-[1] px-6 translate-y-[100%] transition-all duration-[0.4s] ease-in-out z-50 absolute w-screen flex justify-end items-center"
            : "opacity-[0] px-6 translate-y-[0%]  transition-all duration-[0.4s] ease-in-out z-50 absolute w-screen flex justify-end items-center"
        } sx={{top : '25%'}}>
         { booleanVal && <UserCard />}
        </Box>
      }
      <Dashboard />
      <ToastContainer />
    </div>
  );
}

export default App;
