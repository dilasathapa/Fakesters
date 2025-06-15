import { Box, Container, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React from 'react'
import Login from './Authentication/Login'
import Signup from './Authentication/Signup'

const Home = () => {
  return (
    <Container maxW='xl' centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p="2% 38%"
        bg={"white"}
        // w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"      
      >
        <Text fontSize="4xl" fontFamily="work sans" color="blue" maxW="320px">
          Talk2Me
        </Text>
      </Box>
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
