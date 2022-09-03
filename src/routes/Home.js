import { useEffect, useState } from "react";
import { dbService } from "../firebase";
import Nweet from "../components/Nweet";
import NweetFactory from "../components/NweetFactory";

const Home = ({ userObj }) => {
   const [nweets, setNweets] = useState([]);

   
   useEffect(() => {
    dbService.collection("nweets").onSnapshot((snapshot) => {
        const newArray = snapshot.docs.map((document) => ({
            id: document.id,
            ...document.data(),
        }));
        setNweets(newArray);
    })
   }, []);
   // 컴포넌트가 모두 마운트된 이후에 함수를 발동시키기 위해 useEffect 활용
   // dbService.collection("컬렉션이름") 에서 가져오고 더하는 방식으로  crud 를 구현한다.
   // async-await 문을 쓰는 함수는 uesEffect 밖에서 정의 후에 함수명을 이용해 useEffect 안에서 구현한다.

   return (
    <div className="container">
     <NweetFactory userObj={userObj} />
     <div style={{ marginTop: 30}}>
        {nweets.map((nweet) => (
           <Nweet key={nweet.id} nweetObj={nweet} isOwner={nweet.creatorId === userObj.uid}/>
        ))}
     </div>
    </div>
   );
}
export default Home;