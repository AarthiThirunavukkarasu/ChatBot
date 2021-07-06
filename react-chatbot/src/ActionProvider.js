import React,{useEffect} from "react";
class ActionProvider  {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  
  }
  
  greet = () => {
    const message = this.createChatBotMessage("Hello friend.");
    this.addMessageToState(message);
  };
 
  resetAccState = () => {
     const message = this.createChatBotMessage( "Sucess"
  )
      
      
   

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
  
}

export default ActionProvider;