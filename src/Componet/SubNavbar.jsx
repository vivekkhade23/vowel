import { HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const SubNavbar = () => {
  return (
    <HStack display={"flex"} justifyContent="space-around" w={"100vw"}>
        <Link to="/admin/">
        <Text as={"b"}>Products</Text>
        </Link>
        <Link to="/admin/order">
        <Text as={"b"}>Orders</Text>
        </Link>
    </HStack>
  )
}

export default SubNavbar