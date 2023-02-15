import { Box, Button, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import style from "./style.module.css"


const CartCard = ({image,title,price,qty,id,setRender,render}) => {
const [quantity,setQuantity]=useState(qty)
    const handleQuantity=async(value)=>{
try {
    if(quantity===1&&value===-1){
        return;
    }
    console.log(value,qty,qty+value)
    await fetch(`https://vowelapi.onrender.com/cart/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            qty:quantity+value
        }),
        headers: {
          'Content-type': 'application/json'
        }
       
      });
      setQuantity(quantity+value);
      setRender(!render)
    
} catch (error) {
    console.log(error)
}



}

  return (
    <Box  className={style.cartcardbox}>
        <Image className={style.cartcardboximage}   src={image} alt="Cart Image"/>
        <Text className={style.cartcardboxtitle} as="b">
        NAME: {title}
        </Text>
        <Text className={style.cartcardboxprice}>
         PRICE:   {price}
        </Text>
  <Box className={style.cartcardqty}>
    <Button className={style.cartcardbutton} disabled={quantity===1} backgroundColor="#f6895f" onClick={()=>handleQuantity(-1)}>-</Button>
    <Button className={style.cartcardbutton} backgroundColor="#f6895f">{quantity}</Button>
    <Button className={style.cartcardbutton} backgroundColor="#f6895f" onClick={()=>handleQuantity(1)}>+</Button>
  </Box>
    </Box>
  )
}

export default CartCard