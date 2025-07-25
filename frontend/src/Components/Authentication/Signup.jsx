import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from "axios"
// import { useHistory } from "react-router-dom";

const Signup = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmedPassword, setConfirmedPassword] = useState();
  const [pic, setPic] = useState();
  const [show, setShow] = useState(false); 
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  
  const handleClick =()=>{
    setShow(!show);
  }

  const postDetails =(pics)=>{
    setLoading(true);
    if(pics === undefined){
        toast({
            title: "Please select an Image!",
            status : "warning",
            duration : 5000,
            position: "top-right",
            isClosable: true,
        })
        return;
    }

    if(pics.type === "image/jpeg" || pics.type === "image/png"){
        const data = new FormData();
        data.append("file", pics);
        data.append("upload_preset", "chat-app");
        data.append("cloud_name", "dqpdjwfar");
        fetch("https://api.cloudinary.com/v1_1/dqpdjwfar/image/upload", {
            method : "post",
            body : data
        })
        .then((res)=> res.json())
        .then((data)=>{
            setPic(data.url.toString());
            setLoading(false)
        })
    }else{
        toast({
            title: "Please select an Image!",
            status : "warning",
            duration : 5000,
            position: "top-right",
            isClosable: true,
        })
        setLoading(false)
        return
    }
  }

  const submitHandler=async()=>{
    setLoading(true);
    if(!name || !email || !password || !confirmedPassword){
        toast({
            title: "Please fill all the fields",
            status : "warning",
            duration : 5000,
            position: "top-right",
            isClosable: true,
        })
        setLoading(loading);
        return;
    }
    if(password !== confirmedPassword){
         toast({
            title: "Passwords do not match",
            status : "warning",
            duration : 5000,
            position: "top-right",
            isClosable: true,
        })
        return;
    }
    try {
        const config = {
            headers : {
                "Content-type" : "application/json",
            }
        }
        const {data} = await axios.post("/api/user/register", {
            name, email, password, pic
        }, config)
        toast({
            title: "Registration Successful!",
            status : "success",
            duration : 5000,
            position: "top-right",
            isClosable: true,
        })
        localStorage.setItem("userInfo", JSON.stringify(data))
        setLoading(false)
        history.push("/chats")
    } catch (error) {
        toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  }

  return (
    <VStack spacing="5px">
        <FormControl id='first_name' isRequired>
        <FormLabel>Name</FormLabel>
        <Input placeholder='enter your name'
            onChange={(e)=>{setName(e.target.value)}}
        />
        </FormControl>
        <FormControl id='email' isRequired>
        <FormLabel>Email</FormLabel>
            <Input placeholder='enter your email'
                onChange={(e)=>{setEmail(e.target.value)}}
            />
        </FormControl>
        <FormControl id='password' isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
            <Input 
                type={show ? "text" : "password"}
                placeholder='enter your password'
                onChange={(e)=>{setPassword(e.target.value)}}
            />  
            <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                </Button>
            </InputRightElement>  
            </InputGroup>       
        </FormControl>
        <FormControl id='password' isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size="md">
            <Input 
                type="password"
                placeholder='confirm your password'
                onChange={(e)=>{setConfirmedPassword(e.target.value)}}
            />  
            </InputGroup>       
        </FormControl>
        <FormControl id='pic'> 
        <FormLabel>upload your picture</FormLabel>
        <Input 
            type='file'
            p={1.5}
            accept='image/*'
            placeholder='enter your name'
            onChange={(e)=>postDetails(e.target.files[0])}
        />
        </FormControl>
        <Button
            colorScheme='blue'
            width="100%"
            style={{marginTop : 15}}
            onClick={submitHandler}
            isLoading={loading}
        >
            Sign Up
        </Button>
    </VStack>
  )
}

export default Signup
