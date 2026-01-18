import { useState } from "react";
import { supabase } from "./supabase";

export default function Login({ onSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error)  setErrorMessage("Invalid login credentials");
    setLoading(false);
  };

  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">
        <h2 className="text-sm text-gray-400">Please enter your details</h2>
        <h1 className="text-3xl font-bold mb-6">Welcome back</h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-3 border rounded"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Remember for 30 days
            </label>
            <span className="text-blue-500 cursor-pointer">
              Forgot password
            </span>
          </div>

          <button
            className="w-full bg-blue-500 text-white p-3 rounded"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
          {errorMessage && (
    <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
  )}
        </form>

        <button
          onClick={loginWithGoogle}
          className="w-full border p-3 mt-4 rounded flex justify-center gap-2"
        >
          Sign in with Google
        </button>

        <p className="text-center mt-4 text-sm">
          Don’t have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer hover:underline "
            onClick={onSwitch}
          >
            Sign up 
          </span>
        </p>
        
      </div>
    </div>
  );
}
