/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { FaRegUserCircle } from "react-icons/fa";


const Navbar = ({booleanVal , setBooleanVal}) => {
  const { user } = useAuthContext();

  return (
    <>
      <Box className="w-screen h-20 flex items-center justify-between px-5 bg-blue-500">
        <Typography>App Name</Typography>
        {!user ? (
          <>
            <Box className="px-4 flex items-center justify-center gap-3">
              <Link className="hover:opacity-[50%]" to={"/"}>
                Login
              </Link>
              <Link className="hover:opacity-[50%]" to={"/signup"}>
                Signup
              </Link>
            </Box>
          </>
        ) : (
          <>
            <FaRegUserCircle onClick={()=>{
              setBooleanVal(!booleanVal)
            }} />
          </>
        )}
      </Box>
    </>
  );
};

export default Navbar;
