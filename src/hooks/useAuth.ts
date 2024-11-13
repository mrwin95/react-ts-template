import { useState } from "react";
import { login } from "../api/services/authService";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      //   const data = await login(email, password);
      if (email === "admin@gmail.com" && password === "admin") {
        setSuccessMessage("Login successfully!");
        navigate("home", { replace: true });
      }
      //   console.log("Token", data.token);
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };
  return {
    handleLogin,
    loading,
    errorMessage,
    successMessage,
  };
};
