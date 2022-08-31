import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   
import { faTwitter } from "@fortawesome/free-brands-svg-icons"; 
import { faUser } from "@fortawesome/free-solid-svg-icons";


const Navigation = ({userObj}) => {
    return (
    <nav className="container">
        <ul style={{ display: "flex", justifyContent: "center", marginTop: 50}}>
            <li>
                <Link to="/" style={{ marginRight: 50, }}><FontAwesomeIcon icon={faTwitter} color={"#04AAFF"} size="2x" /></Link>
            </li>
            <li>
                <Link to="/profile"
                      style={{
                        
                        marginLeft: 10,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        fontSize: 12, }}>
                        <FontAwesomeIcon icon={faUser} color={"#04AAFF"} size="2x" />
                        <span style={{ marginTop: 10 }} /* userObj 는 app.js -> router.js -> navigation 으로 내려준 props */>
                            {userObj.displayName
                              ? `${userObj.displayName}의 Profile`
                              : "Profile"}
                              
                        </span>
                    </Link>
            </li>
        </ul>
    </nav>
    );
}

export default Navigation;