import { HashRouter, Route, Routes } from "react-router-dom";   
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "./Navigation";
import Profile from "../routes/Profile";

const AppRouter = ({ isLoggedIn, userObj, refreshUser}) => {
// '이 3개의 전달된 prop 들은 상황에 따라 계속 다른값을 주고싶은 속성들이다 ~ ' 라고 생각하면 좋다.

    return (
        <div
          style={{
            maxWidth: 890,
            width: "100%",
            margin: "0 auto",
            marginTop: 200,
            display: "flex",
            justifyContent: "center",
            
          }}>
        <HashRouter>
            {isLoggedIn && <Navigation userObj={userObj} /> /* 기본적으로 띄우고 싶은 컴포넌트 */}  
            
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