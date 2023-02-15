import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import style from "./style.module.css"


const OrderCart = ({image,title,price,qty}) => {
  return (
    <Box  className={style.cardbox}>
    <Image className={style.cardboximage}   src={image} alt="Product Image"/>
    <Text className={style.cardboxtitle} as="b">
    NAME: {title}
    </Text>
    <Text className={style.cardboxprice}>
     PRICE:   {price}
    </Text>
    <Text className={style.cardboxprice}>
     qty:   {qty}
    </Text>
</Box>
  )
}

export default OrderCart