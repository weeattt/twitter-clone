import { useState } from "react";
import { dbService, storageService } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";


const NweetFactory = ({ userObj }) => {
    const [nweet, setNweet] = useState("");
    const [attachment, setAttachment] = useState("");


    const onSubmit = async (event) => {
        event.preventDefault();
        if (nweet === "") {
            return;
        }
        let attachmentUrl = "";
        if (attachment !== "") {
        const attachmentRef = storageService
            .ref()
            .child(`${userObj.uid}/${uuidv4()}`);
        const response = await attachmentRef.putString(attachment, "data_url");
         attachmentUrl = await response.ref.getDownloadURL();
        }
        await dbService.collection("nweets").add({
         text: nweet,
         createAt: Date.now(),
         creatorId: userObj.uid,
         attachmentUrl,
        })
        setNweet("");
        setAttachment("");
       };
 
    
    //오류 자체에 얽매이지 말고 어떤 기능을 구현하려고했는지 확인하고 다른 방법을 찾아라. 164p
 
    const onChange = async (event) => {
        event.preventDefault();
        const {
         target: {value},
        } = event;
        setNweet(value);
    };
 
    const onFileChange = (event) => {
     const {
         target: { files },
     } = event;
     const theFile = files[0];
     const reader = new FileReader();
     reader.onloadend = (finishedEvent) => {
        const {
         currentTarget: { result },
        } = finishedEvent;
        setAttachment(result);
       }
       reader.readAsDataURL(theFile);
       
    }
 
    const onClearAttachment = () => {setAttachment("")};
 // event.target.files 를 출력해보면 파일관련 정보가 출력된다. 이 값을 이용해서 파일 미리보기, 파일 등록기능을 구현한다.
   
   
   
    return (
        
         <form onSubmit={onSubmit} className="factoryForm">
           <div className="factoryInput__container">
            <input
              className="factoryInput__input"
              value={nweet}
              onChange={onChange}
              type="text"
              placeholder="What's on your mind?"
              maxLength={120}
            />
             <input type="submit" value="&rarr;" className="factoryInput__arrow" />
            </div>
            <label htmlFor="attach-file" className="factoryInput__label">
                <span>Add photos</span>
                <FontAwesomeIcon icon={faPlus} />
            </label>
            <input 
               id="attach-file"
               type="file" 
               accept="image/*" 
               onChange={onFileChange}  
               style={{
                  opacity: 0,
               }}
               />
            
            {attachment && ( 
              <div className="factoryForm__attachment">
                <img style={{ backgroundImage: attachment, }} src={attachment} alt="hi" width="50px" height="50px" />
                <div className="factoryForm__clear" onClick={onClearAttachment}>
                    <span>Remove</span>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
             </div>
            )}
         </form>
    );
};
  
export default NweetFactory;