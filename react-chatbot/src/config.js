import React,{useEffect} from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./Component/Options/Options";



const config = {
  botName: "StarAssistance",
  initialMessages: [
    createChatBotMessage('Hello. How can i help u? ', {
      widget: "options",
    }),
  ],
  lang: "no",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#900",
    },
    chatButton: {
      backgroundColor: "#900",
    },
  },
  state:{
    userResponse :[]


  },
 widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
      
  ],
  widgets: [
    {
      widgetName: "user",
      widgetFunc: (props) => <users {...props} />,
    },
      
  ],
};

export default config;