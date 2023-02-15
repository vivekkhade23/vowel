import { HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import style from "./style.module.css"

const Navbar = () => {
   

  return (
   <HStack className={style.mainnavbar}>
  <Link to="/">
    <Text as="b">VOWEL-WEB</Text>
  </Link>
 
    <Text as="b">
      <HStack>
      <Link to="/cart">
        <Text as="b">
        Cart
        </Text>
  </Link>
  <Link to="/login">
        <Text  color={"#f6895f"}>
      Admin Login
        </Text>
  </Link>
        </HStack>  
    </Text>
   </HStack>
  )
}

export default Navbar