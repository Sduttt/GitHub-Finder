import React, { useState, useContext, useEffect } from "react";
import userContext from "../context/context";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const Signin = () => {
  const context = useContext(userContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    const Auth = getAuth();
    signInWithEmailAndPassword(Auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(user);
        context.setUser([{ email: user.email, uid: user.uid }]);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast(errorMessage, { type: "error" });
        // ..
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignIn();
  };

  useEffect(() => {
    if (context.user) {
      navigate("/");
    }
  }, [context.user, navigate]);
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96 mx-auto mt-24 flex flex-col items-center">
        <h2 className="text-lg font-medium mb-4 text-center">Sign In</h2>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email Id..."
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-400 p-2"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-400 p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-sky-800 hover:bg-sky-900 text-white font-medium py-2 px-4 rounded w-36">
          Sign In
        </button>
      </form>
      <p className="text-center text-gray-800">New user? <Link to={'/signup'} className='text-sky-700'>Sign Up</Link> here!</p>
    </>
  );
};

export default Signin;
