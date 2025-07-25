import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, position, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
// import { useHistory } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();  
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false); 
    const toast = useToast();

    const navigate = useNavigate()
    
    
    const handleClick =()=>{
        setShow(!show);
    }
    const submitHandler = async()=>{
        setLoading(true);
        if(!email || !password){
            toast({
                title : "Please fill all the fields",
                status : "warning",
                duration : 5000,
                isCloasable : true,
                position : "top-right"
            })
            setLoading(false)
            return;
        }
        try {
            const config = {
                headers : {
                    "Content-type" : "application/json"
                }
            }

            const {data} = await axios.post("/api/user/login", {email, password}, config);
            toast({
                title : "Login Successful",
                status : "success",
                duration : 5000,
                isCloasable : true,
                position : "top-right"
            })
            localStorage.setItem("userInfo", JSON.stringify(data));
            setLoading(false);
            navigate("/chats")
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
        <VStack>
            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input type='email' placeholder='enter your email' 
                onChange={(e)=>setEmail(e.target.value)}
                />
            </FormControl>
            <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                <Input type = {show ? "text" : "password"}
                placeholder='enter your password' 
                onChange={(e)=>{setPassword(e.target.value)}}
                />
                <InputRightElement width="4.5rem" >
                    <Button h="1.75rem" size="sm" 
                    onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                    </Button>
                </InputRightElement>
                </InputGroup>
            </FormControl>
            <Button
                colorScheme='blue'
                width="100%"
                style={{marginTop : 15}}
                onClick={submitHandler}
                isLoading={loading}
            >
                Login
            </Button>
            
        </VStack>
    )
}

export default Login
