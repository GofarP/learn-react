import { useState } from "react";
import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";
import { ProfileContext } from "./ProfileContext";
import ProfileForm from "./ProfileForm";

export default function ProfileApp() {
    const [profile, setProfile]=useState({
        nama: "Gofar Putra Perdana",
        alamat:"Jl.jalan"
    })

    const [name, setName]=useState("Gofar")

    return(
        <>
            <ProfileContext.Provider value={name}>
                <h1>Profile App</h1>
                <ProfileForm name={name} setName={setName}/>
                <Profile/>
                <ProfileAddress/>
            </ProfileContext.Provider>
        </>
    )
};
