import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import style from "./style.module.css"


const ProductCard = ({image,title,price}) => {


  return (
    <Box  className={style.cardbox}>
        <Image className={style.cardboximage}   src={image} alt="Product Image"/>
        <Text className={style.cardboxtitle} as="b">
        NAME: {title}
        </Text>
        <Text className={style.cardboxprice}>
         PRICE:   {price}
        </Text>
  
    </Box>
  )
}

export default ProductCard