import {ChatEngine} from 'react-chat-engine';
// chat engine import from react-chat-engine
// install chat engine using npm install react-chat-engine command 
import  ChatFeed from './components/ChatFeed';

// create App css file to implement cascading styles cheets
import './App.css';
// create App function that return what we need to show 
const App = () => {

    return(
        //set some feature for chat engine 
        <ChatEngine  
        height =  "100vh"
        projectID ="2838383g383838"
        userName ="mohamed"
        userSecret="123123"
        renderChatFeed={(chatAppProps)  => <chatFeed{... chatAppProps}/>}
        
        />
        

        
    );
}
export default App;
