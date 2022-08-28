import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA73LedhelGfjBCKfk00NjCLy9UIj-lLyA",
    authDomain: "twitter-clone-28082.firebaseapp.com",
    projectId: "twitter-clone-28082",
    storageBucket: "twitter-clone-28082.appspot.com",
    messagingSenderId: "810286760601",
    appId: "1:810286760601:web:86fca9c7e9a994e623ae08"
  };

firebase.initializeApp(firebaseConfig);
// initalizeAPp 함수를 앞에서 수입한 firebase객체에서 꺼내 사용하는것이다
// 파라미터에는 앞에서 정의한 firebase 설정을 전달해 initalizeApp 함수를 실행한다.

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
// firebase.auth()는 다른 파일에서 참조할 것이므로 authService 에 담아내보내도록 작성