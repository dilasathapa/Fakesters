import React, { useState } from 'react'
import { ChatState } from '../../context/chatProvider'
import { Box, Button, FormControl, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast } from '@chakra-ui/react';
import axios from 'axios';
import UserBadgeItem from '../UserAvatar/UserBadgeItem';
import UserListItem from '../UserAvatar/UserListItem';

const GroupChatModal = ({children}) => {
    const [groupChatName, setGroupChatName] = useState()
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const {user, chats, setChats} = ChatState();

    const handleGroup =(userToAdd)=>{
        if(selectedUsers.includes(userToAdd)){
            toast({
                title: "User already added",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "top",
            })
            return;
        }
        setSelectedUsers([...selectedUsers, userToAdd])
    }


    const handleSearch = async(query)=>{
        setSearch(query);
        if(!query){
            return;
        }

        try {
            setLoading(true);
            const config = {
                headers : {
                    Authorization : `Bearer ${user.token}`
                }
            }

            const {data} = await axios.get(`https://fakesters-2.onrender.com/api/user?search=${search}`, config)
            setLoading(false);
            console.log("data", data)
            setSearchResult(data);
        } catch (error) {
            toast({
                title: "Error Occured!",
                description: "Failed to Load the Search Results",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom-left",
            });
        }
    }

    const handleDelete = (delUser) =>{
        setSelectedUsers(selectedUsers.filter((sel)=>sel._id !== delUser._id))
    }

    const handleSubmit = async()=>{
        if(!groupChatName || !selectedUsers){
            toast({
                title: "Please fill all the feilds",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "top",
            });
            return;
        }

        try {
            const config = {
                headers : {
                    Authorization : `Bearer ${user.token}`
                }
            }
            const data = await axios.post(`https://fakesters-2.onrender.com/api/chat/group`, {
                name : groupChatName,
                users : JSON.stringify(selectedUsers.map((u) =>  u._id)),
            }, config);

            setChats([data, ...chats]);
            console.log(data)
            onClose();
            toast({
                title: "New Group Chat Created!",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
        } catch (error) {
            toast({
                title: "Failed to Create the Chat!",
                description : error,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
        }
    }



    return (
        <>
            <span onClick={onOpen}>{children}</span>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader
                        fontSize="35px"
                        fontFamily="Work sans"
                        display="flex"
                        justifyContent="center"
                    >
                        Create Group Chat
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody display="flex" flexDir="column" alignItems="center">
                        <FormControl>
                            <Input 
                                placeholder='Chat Name'
                                mb={3}
                                onChange={(e)=>setGroupChatName(e.target.value)}
                            />
                        </FormControl>
                        <FormControl>
                            <Input 
                                placeholder='Add users eg: John, Piyush, Jane'
                                mb={1}
                                onChange={(e)=>handleSearch(e.target.value)}
                            />
                        </FormControl>
                        <Box w="100%" display="flex" flexWrap="wrap">
                            {selectedUsers.map((u)=>(
                                <UserBadgeItem 
                                    key={u._id}
                                    user={u}
                                    handleFunction={()=>handleDelete(u)}
                                />
                            ))}
                        </Box>
                        { loading ? (
                            <div>Loading...</div>
                        ) : (

                            searchResult?.slice(0, 4).map((per)=>(
                                <UserListItem 
                                    key={per._id}
                                    user={per}
                                    handleFunction={()=>handleGroup(per)}
                                />
                            ))
                        )}
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={handleSubmit} colorScheme='blue'>
                            Create Chat
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default GroupChatModal;
