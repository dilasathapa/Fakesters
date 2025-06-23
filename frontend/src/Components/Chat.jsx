import React, { useState } from 'react'
import {Box} from "@chakra-ui/react"
import Sidedrawer from './Miscellaneous/Sidedrawer';
import { ChatState} from "../context/chatProvider"
import Mychats from "./Mychats.jsx"
import Chatbox from './Chatbox';

const Chat = () => {

  const [fetchAgain, setFetchAgain] = useState(false);
  const {user} = ChatState();
  console.log(user)
  return (
    <div style={{width : "100%"}}>
        {user && <Sidedrawer />}
        <Box display="flex"
              justifyContent="space-between" w="100%" h="91.5vh" p="10px">
              {user && <Mychats fetchAgain={fetchAgain} /> }
              {user && 
                <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
              }
        </Box>
    </div>
  )
}

export default Chat
