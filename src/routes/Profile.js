import { authService } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Profile = ({userObj, refreshUser}) => {
    const navigate =useNavigate();
    const [newDisplayName, setNewDisplayName] = useState(userObj.newDisplayName);

    const onLogOutClick = () => {
        authService.signOut();
        navigate("/");
    };

    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setNewDisplayName(value);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        if (userObj.displayName !== newDisplayName) {
            await userObj.updateProfile({ displayName: newDisplayName});
            refreshUser();
        }
    }
   

    return (
        <div className="container">
         <form onSubmit={onSubmit} className="profileForm">
            <input type="text" onChange={onChange} placeholder="Display name" value={newDisplayName} autoFocus className="formInput" />
            <input type="submit" value="Update Profile" className="formBtn" style={{ marginTop: 10, }}/>
         </form>
         <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
            Log Out
         </span>
        </div>
    );
};

export default Profile;