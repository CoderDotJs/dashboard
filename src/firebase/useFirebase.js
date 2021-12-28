import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, getIdToken  } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInit from "./firebase.initialization";

firebaseInit();

const useFirebase = () => {

    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState({});

    const login = () =>{
        signInWithPopup(auth, provider)
  .then((result) => {   
      const data = result.user;
      setUser(data);
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    console.log(errorCode, errorMessage, email, credential);
  });
    }

  const googleSignIn = () =>{
    return login();
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if(!user){
            setUser({});
            console.log('user from !user', user)
        }else{
          getIdToken(user).then((token) => {
            
            if(localStorage.key('idToken')){
                localStorage.setItem('idToken', token);
            }
            // console.log(localStorage.key('idToken'))
          });
          setUser(user);
          console.log('user from else', user)
        }
      });
      
  } , [auth]);


  const logOut = () => {
    signOut(auth).then(() => {
        console.log('Logout Successful.')
      }).catch((error) => {
        console.log('Logout Failed.')
      });
  }

    return {
        googleSignIn,
        user,
        logOut,
        auth
    }
};

export default useFirebase;