import { useState } from "react";
import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";
import { ProfileContext } from "./ProfileContext";

export default function ProfileApp() {
    const [profile, setProfile]=useState({
        nama: "Gofar Putra Perdana",
        alamat:"Jl.jalan"
    })
    return(
        <>
            <ProfileContext.Provider value={{profile, setProfile}}>
            <h1>Profile App</h1>
            <Profile/>
            <ProfileAddress/>
            </ProfileContext.Provider>
        </>
    )
};
