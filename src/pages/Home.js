import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Repos from "../components/Repos";
import UserCard from "../components/UserCard";
import userContext from "../context/context";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const context = useContext(userContext);
  const [query, setQuery] = useState("");
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const fetchDetails = async () => {
    try {
      const { data } = await axios.get(`https://api.github.com/users/${query}`);
      setUser(data);
      console.log(data);
    } catch (error) {
      toast("User not available!", { type: "error" });
      console.log(error);
    }
  };
  useEffect(() => {
    if (!context.user?.uid) {
      return navigate("/signin");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.user]);
  return (
    <>
      <div className="flex justify-center mt-6 mb-2">
        <input
          className="p-2 w-72 rounded mx-1"
          placeholder="GitHub Username..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={fetchDetails}
          className="rounded p-2 bg-sky-700 hover:bg-sky-900 text-white font-semibold">
          Search
        </button>
      </div>
      <div className="flex my-2 justify-center">
        {user ? <UserCard user={user} /> : ""}
        {user ? <Repos repos_url={user.repos_url} /> : ""}
      </div>
    </>
  );
};

export default Home;
