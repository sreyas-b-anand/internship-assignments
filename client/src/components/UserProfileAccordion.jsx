/* eslint-disable react/prop-types */

import { Box, Typography, Button } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import useLogout from "../hooks/useLogout";
const UserCard = () => {
  const { user } = useContext(AuthContext);
  const {logout } = useLogout()
  return (
    <Box
      sx={{
        zIndex: 50,
        position: "absolute",
        borderRadius: 1,
        border: 1,
        padding: 2,
        px: 4,
        transition: "all 2s ease-in-out",
        overflow: "visible",
        display: "inline-block",
      }}
      className="bg-zinc-200 "
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          padding: 1,
        }}
      >
        <Typography
          sx={{
            borderBottom: "1px solid gray",
            py: 1,
          }}
        >
          {user.username}
        </Typography>
        <Typography
          sx={{
            borderBottom: "1px solid gray",
            py: 1,
          }}
        >
          {user.email}
        </Typography>
        <Button
          variant="outlined"
          color="error"
          size="small"
          sx={{
            opacity: 0.7,
            "&:hover": {
              opacity: 1,
            },
            border: "1px solid",
          }}
          onClick={logout}
        >
          LOG OUT
        </Button>
      </Box>
    </Box>
  );
};

export default UserCard;
