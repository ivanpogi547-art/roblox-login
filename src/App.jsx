import { useState, useEffect } from "react";
import { supabase } from "./supabase";
import Login from "./Login";
import Register from "./Register";

export default function App() {
  const [session, setSession] = useState(null);
  const [showRegister, setShowRegister] = useState(false);
  
const handleLogout = async () => {
  await supabase.auth.signOut();
  setShowRegister(false);
};


  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  if (session) {
  const firstName = session.user.email.split("@")[0];

  return (
    <div className="min-h-screen bg-gray-500 flex items-center justify-center flex-col ">
      <h1 className="text-3xl font-bold">
        Welcome, {firstName}
      </h1>
       <button
        onClick={handleLogout}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-red-600 mt-[50px]"
      >    LOGOUT  </button>
    </div>
  );
}


  return showRegister ? (
    
    <Register onSwitch={() => setShowRegister(false)} /> // switch to Register

  ) : (
    <Login onSwitch={() => setShowRegister(true)} /> // switch to Login
  ); 
}
