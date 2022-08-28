import { HashRouter, Route, Routes } from "react-router-dom";   
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "./Navigation";
import Profile from "../routes/Profile";

const AppRouter = ({ isLoggedIn, userObj, refreshUser}) => {
    

    return (
        <div
          style={{
            //maxWidth: 890,
            width: "100%",
            margin: "0 outo",
            marginTop: 200,
            display: "flex",
            justifyContent: "center",
          }}>
        <HashRouter>
            {isLoggedIn && <Navigation userObj={userObj} />}
            <Routes>
              {isLoggedIn ? (
                <>
                <Route path="/" element={<Home userObj={userObj} />}/>
                <Route path="/profile" element={<Profile refreshUser={refreshUser} userObj={userObj} />}/>
                </>
              ) : (
                <Route path="/" element={<Auth />}/>
              )}
            </Routes>
        </HashRouter>
        </div>
    )
}

export default AppRouter;