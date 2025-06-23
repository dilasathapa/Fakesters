import React, { useState } from 'react'
import { ChatState } from '../../context/chatProvider';
import { Avatar, Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Input, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Spinner, Text, Tooltip, useDisclosure, useToast } from '@chakra-ui/react';
import { BellIcon, ChevronDownIcon, SpinnerIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProfileModal from './ProfileModal';
import ChatLoading from '../ChatLoading';
import UserListItem from '../UserAvatar/UserListItem';


const Sidedrawer = () => {

    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadingChat, setLoadingChat] = useState(false);

    const {user, setUser, chats, setChats, selectedCHat, setSelectedChat} = ChatState();
    const toast = useToast();
    const { isOpen, onOpen, onClose} = useDisclosure()
    const navigate = useNavigate();

    const logoutHandler = ()=>{
        localStorage.removeItem("userInfo")
        navigate("/");
    }

    const handleSearch = async()=>{
        if(!search){
            toast({
                title : "Please Enter something in Search",
                status : "warning",
                duration : 5000,
                isClosable : true,
                position : 'top-left'
            });
            return;
        }
        try {
            setLoading(true);

            const config = {
                headers : {
                    Authorization : `Bearer ${user.token}`
                }
            }

            const {data} = await axios.get(`http://localhost:8000/api/user?search=${search}`, config)
            console.log("data", data)
            setLoading(false);
            setSearchResult(data);

        } catch (error) {
            toast({
                title : "Error Occured!",
                duration : 5000,
                isClosable : true,
                description : "Failed to load the search results",
                position : "bottom-left"
            })
        }
    }

    const accessChat = async(userId)=>{

        try {
            setLoadingChat(true);
            const config = {
                headers: {
                    "Content-type" : "application/json",
                    Authorization : `Bearer ${user.token}`
                }
            }
            const {data} = await axios.post('http://localhost:8000/api/chat', {userId}, config);

            if(!chats.find((c)=>c._id === data._id)) setChats([data, ...chats]);

            setSelectedChat(data);
            setLoading(false)
            onClose();
        } catch (error) {
            toast({
                title : "Error fetching the chat",
                description : error.message,
                duration : 5000,
                isClosable : true,
                position : "bottom-left"
            })
        }
    }

    return (
        <>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                bg="green"
                w="100%"
                p="5px 10px 5px 10px"
                borderWidth="5px"
            >
                <Tooltip label="Search Users to chat" hasArrow placement='bottom-end'>
                    <Button variant="ghost" onClick={onOpen}>
                        {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
                        <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
                        <Text d={{base : "none", md:"flex"}} px={4}>
                            search user
                        </Text>
                    </Button>
                </Tooltip>
                <Text fontSize="2xl" fontFamily="work sans">
                    Talk
                </Text>
                <div>
                    <Menu>
                        <MenuButton p={1}>
                            {/* notificationbadge */}
                            <BellIcon fontSize="2xl" m={1}/>
                        </MenuButton>
                        <MenuList pl={2}>
                            {/* {!notification.length && "No New Messages"}
                            {notification.map((notify)=>( */}
                                <MenuItem 
                                    // key={notify._id}
                                    // onClick={()=>{
                                    //     setSelectedChat(notify.chat);
                                    //     setNotification(notification.filter((n)=> n!==notify));
                                    // }}
                                >
                                    {/* { notify.chat.isGroupChat ? 
                                        `New Mwssage in ${notify.chat.chatName}` : 
                                        `New message from ${setSender(user, notify.chat.users)}`
                                    } */}
                                </MenuItem>
                            {/* ))} */}
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton as={Button} bg="white" rightIcon={<ChevronDownIcon />}>
                            <Avatar 
                                size="sm"
                                cursor="pointer"
                                name={user.name}
                                src={user.pic}
                            /> 
                        </MenuButton>
                        <MenuList>
                            <ProfileModal user={user}>
                                <MenuItem>My Profile</MenuItem>{" "}
                            </ProfileModal>
                            <MenuDivider />
                            <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            </Box>

            <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth="1px">Search Users</DrawerHeader>
                    <DrawerBody>
                        <Box display="flex" pb={2}>
                            <Input 
                                placeholder='Search by name or email'
                                mr={2}
                                value={search}
                                onChange={(e)=>setSearch(e.target.value)}
                            />
                            <Button onClick={handleSearch}>Go</Button>
                        </Box>
                        { loading ? (
                            <ChatLoading />
                        ) : (
                            searchResult?.map((ele)=>(
                                <UserListItem 
                                    key={ele._id}
                                    user={ele}
                                    handleFunction = {()=> accessChat(ele._id)}
                                />
                            ))
                        )}
                        {loadingChat && <Spinner ml="auto" display="flex" />}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Sidedrawer;
