import { useState } from "react";
import { login } from "../api/services/authService";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const data = await login(email, password);
      setSuccessMessage("Login successfully!");
      console.log("Token", data.token);
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
