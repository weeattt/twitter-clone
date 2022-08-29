import AppRouter from "./Router";
import { useEffect, useState } from "react";
import { authService } from "../firebase";


function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);


  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        
        setUserObj({
          uid: user.uid,
          displayName: user.displayName,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObj(false);
      }
      setInit(true);
    })
  }, []);

  const refreshUser = () => {
      const user = authService.currentUser;
      setUserObj({
        uid: user.uid,
        displayName: user.displayName,
        updateProfile: (args) => user.updateProfile(args),
      });

  }
  

  return (
    <>
    {init ? (
    <AppRouter refreshUser={refreshUser} isLoggedIn={Boolean(userObj)} userObj={userObj} /> 
    ) : (
      "initalizing..."
    )}
    
    </>
  );
}

export default App;

// index.js -> app.js -> approuter.js
