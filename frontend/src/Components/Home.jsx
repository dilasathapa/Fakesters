import { Box, Container, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Login from './Authentication/Login'
import Signup from './Authentication/Signup'
import {useNavigate} from 'react-router-dom'
import logo from "./../assets/filelogo.png"
import "./Styles.css"

const Home = () => {

  const navigate = useNavigate()

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if(user) navigate('/chats')
  },[])


  return (
    <Container maxW='xl' centerContent>
      {/* <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"      
      > */}
        {/* <Text fontSize="4xl" fontFamily="work sans" color="blue" maxW="320px"> */}
          <img src={logo} alt="logo pic" className='logo_pic' />

        {/* </Text>  */}
      {/* </Box> */}
      <Box bg="white" w="100%" p={4} borderRadius="lg" color="blue" borderWidth="1px">
        <Tabs isFitted variant='enclosed'>
          <TabList mb='1em'>
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default Home
