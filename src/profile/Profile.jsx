import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

export default function Profile() {
    // const {profile}=useContext(ProfileContext);
    const name=useContext(ProfileContext)
    return(
        <>
            <h2>Profile</h2>
            <p>Hello {name}</p>
        </>
    )    
};
