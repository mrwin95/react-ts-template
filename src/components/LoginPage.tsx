import { useState } from "react";
import TextInput from "./TextInput";
import { useAuth } from "../hooks/useAuth";

export default function LoginPage(){

    const {handleLogin, loading, errorMessage, successMessage} = useAuth();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleLogin(email, password);
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800">
                    Login
                </h2>

                {
                    errorMessage && (
                        <div className="p-4 text-sm text-red-700 bg-red-100 rounded">{errorMessage}</div>
                    )
                }

                {
                    successMessage && (
                        <div className="p-4 text-sm text-green-700 bg-green-100 rounded">{successMessage}</div>
                    )
                }
                <form className="space-y-6" onSubmit={onSubmit}>
                    <TextInput id="email"
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    placeholder="your@example.com"/>

                    <TextInput id="password"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    placeholder="********"/>

                <button type="submit"
                disabled={loading}
                className={`w-full px-4 py-2 text-white bg-indigo-600 
                rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 
                focus:ring-offset-2 focus:ring-indigo-500 ${loading && "opacity-50 cursor-not-allowed"}`}>
                    {loading ? "Signing in..." : "Sign in"}
                </button>
                </form>
                <p className="mt-6 text-sm text-center text-gray-600">
                    Don't have an account? {" "}                
                </p>
            </div>    
        </div>
    );
}