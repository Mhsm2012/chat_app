import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";





const ChatFeed =(propos) =>{
    const {chats,activeChat,userName,messages}=props;

    const chat = chats && chats[activeChat];
    
    return(
        <div>
            Chatfeed
        </div>
    );


}
export default ChatFeed;