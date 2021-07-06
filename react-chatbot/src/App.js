import './App.css';
import { Chatbot } from 'react-chatbot-kit';
import config from './config';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
function App() {
  return (
    <div className="App">
     <header className="App-header">
        <Chatbot 
        config={config} 
        messageParser={MessageParser} 
        actionProvider={ActionProvider} 
        />
     </header>

    </div>
  );
}

export default App;
