import { useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

function Login() {
    
  const {login , isLoading } = useLogin()
 
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleGoogleAuth = () => {
    window.location.href = "http://localhost:4000/auth/google";
  };

  const onSubmit = async (data) => {
    try {
      await login(data.email , data.password)
    
     // console.log("Login successful:", json);
      setError("");
      setSuccess("Login successful!");
      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (err) {
      //console.error("Login error:", err);
      setError(err.message);
      setSuccess("");
    }
  };

  return (
    <Container className="w-screen h-screen centered gap-7 flex-wrap rounded-sm text-fontcolor">
      <Box
        component="form"
        px={5}
        py={3}
        className="border bg-formbg flex items-start justify-start flex-col gap-5 rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography
          sx={{
            textAlign: "center",
            width: "100%",
            fontSize: 26,
            color: "black",
          }}
        >
          Login
        </Typography>

        <Box className="form-style">
          <TextField
            fullWidth
            size="small"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            placeholder=" "
            className="input-style form-input"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </Box>

        <Box className="form-style ">
          <TextField
            fullWidth
            size="small"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            placeholder=" "
            className="input-style form-input"
            type="password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </Box>

        {error && (
          <Typography className="text-red-500 text-center w-full">
            {error}
          </Typography>
        )}

        {success && (
          <Typography className="text-green-500 text-center w-full">
            {success}
          </Typography>
        )}

        <Box className="w-full flex items-center justify-end ">
          <Link className="underline text-black" to="/forgot-password">
            Forgot password?
          </Link>
        </Box>

        <Box className="w-full centered">
          <Button
            className="border-blue-500 text-white bg-blue-700 hover:opacity-[50%] px-3 py-1 rounded-md"
            type="submit"
          >
            {isLoading ? "Loading..." : "Login"}
          </Button>
        </Box>

        <Box className="w-full text-center text-black">
          <Typography>
            <Link to="/signup">Create a new account</Link>
          </Typography>
        </Box>

        <Box className="w-full centered gap-3 ">
          <Typography className="w-full text-center text-2xl text-black">
            OR
          </Typography>
          <Button
            onClick={handleGoogleAuth}
            sx={{ backgroundColor: "blue", color: "white" }}
          >
            Sign in with Google
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;

