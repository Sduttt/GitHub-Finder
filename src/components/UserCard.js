import React from "react";

const UserCard = ({user}) => {

    return(
        <div className="p-8 text-center mx-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-full bg-teal-100">
            <img src={user.avatar_url} className="rounded-full w-96" alt="avatar"/>
            <div className="">
                <p className="font-bold text-lg">{user.name}</p>
                <p className="text-xs text-gray-800">{user.location}</p>
                <p className="text-gray-800 text-xs">{user.bio}</p>
                <p className="text-gray-800 text-xs">Available for hire: {user.hireable ? "Yes" : "No"}</p>
                <p className="text-gray-800 text-xs">Followers: {user.followers}</p>
                <p className="text-gray-800 text-xs">Number of public repos: {user.public_repos}</p>
            </div>
        </div>
    )
}
export default UserCard;