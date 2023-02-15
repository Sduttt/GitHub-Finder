import React, { useState, useContext, useEffect } from "react";
import userContext from "../context/context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Link } from "react-router-dom";

import Loading from "./Loading";

const Signup = () => {
  const context = useContext(userContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = () => {
    const Auth = getAuth();
    createUserWithEmailAndPassword(Auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(context.user);
        context.setUser([{ email: user.email, uid: user.uid }]);
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast(errorMessage, { type: "error" });
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    handleSignUp();
  };

  useEffect(() => {
    if (context.user) {
      setLoading(false);
      navigate("/");
    }
  }, [context.user, loading, navigate]);

  if(loading){
    return <Loading />
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96 mx-auto mt-24 flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email Id..."
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-400 p-2 rounded"
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
            className="w-full border border-gray-400 p-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-sky-800 hover:bg-sky-900 text-white font-medium py-2 px-4 rounded w-36">
          Sign Up
        </button>
      </form>
      <p className="text-center text-gray-800 mt-2">
        Already have account?{" "}
        <Link to={"/signin"} className="text-sky-700">
          Sign In
        </Link>{" "}
        here!
      </p>
    </>
  );
};

export default Signup;
