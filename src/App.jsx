import { useState } from "react";


export default function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) setMessage(error.message);
    else setMessage("Login successful!");

    setLoading(false);
  };

  // REGISTER
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) setMessage(error.message);
    else setMessage(
      "Account created! Check your email to confirm."
    );

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {isLogin ? "Login" : "Register"}
        </h2>

        <form onSubmit={isLogin ? handleLogin : handleRegister}>
          <input
            type="email"
            className="w-full p-3 rounded-lg border mb-3 focus:outline-none"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            className="w-full p-3 rounded-lg border mb-3 focus:outline-none"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {message && (
            <p
              className={`text-sm mb-3 text-center ${
                message.includes("successful") || message.includes("created")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            className={`w-full py-3 rounded-lg transition ${
              isLogin ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-green-600 hover:bg-green-700 text-white"
            }`}
          >
            {loading
              ? isLogin
                ? "Logging in..."
                : "Registering..."
              : isLogin
              ? "Login"
              : "Register"}
          </button>
        </form>

        <p className="text-center mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            className="text-blue-600 hover:underline"
            onClick={() => {
              setIsLogin(!isLogin);
              setMessage("");
              setEmail("");
              setPassword("");
            }}
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
