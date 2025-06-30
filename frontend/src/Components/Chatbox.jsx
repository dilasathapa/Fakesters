import React from 'react'
import { ChatState } from '../context/chatProvider';
import { Box } from '@chakra-ui/react';
import SingleChat from './SingleChat';

const Chatbox = ({fetchAgain, setFetchAgin}) => {

    const {selectedChat} = ChatState();
    console.log("selectedchat", selectedChat)

    return (
        <Box display={{base : selectedChat ? "flex" : "none", md : "flex"}}
            alignItems="center"
            flexDir="column"
            p={3}
            bg="white"
            w={{base : "100%", md : "68%"}}
            borderRadius="lg"
            borderWidth="1px"
        >
            <SingleChat></SingleChat>
        </Box>
    )
}

export default Chatbox;
