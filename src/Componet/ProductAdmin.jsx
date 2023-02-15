import { Box, Button, Image, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import style from "./style.module.css"


const ProductCardAdmin = ({image,title,price,qty,render,setRender,id}) => {
    const [name,setName]=useState("");
    const [newprice,setNewprice]=useState(0);
    const [newqty,setNewqty]=useState(0);
    const[flag,setFlag]=useState(false)

const handleChanges=(e)=>{
e.preventDefault();
if(name===""){
    name=title
}
if(newprice===""){
    newprice=price
}
if(newqty===""){
    newqty=qty
}
fetch(`https://vowelapi.onrender.com/product/${id}`,{

    method:"PUT",
    body:JSON.stringify({
        title:name,
        price:newprice,
        qty:newqty
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }  
})
setRender(!render)
setFlag(false)

}
    

  return (
    <Box  className={style.cardbox}>
        <Image className={style.cardboximage}   src={image} alt="Product Image"/>
        <Text className={style.cardboxtitle} as="b">
        NAME: {title}
        </Text>
        <Text className={style.cardboxprice}>
         PRICE:   {price}
        </Text>
        {
            flag?<Box display={"flex"}flexDirection="column">
<Input placeholder="title" value={name} onChange={(e)=>setName(e.target.value)}/>
<Input placeholder="price" value={newprice} onChange={(e)=>setNewprice(e.target.value)}/>
<Input placeholder="Quantity" value={newqty} onChange={(e)=>setNewqty(e.target.value)}/>
<Button onClick={handleChanges}>
    ADD CHANGES
</Button>
          <Button onClick={()=>setFlag(false)}>
            DO NOT CHANGE
          </Button>
            </Box>:<Button onClick={()=>setFlag(true)}>Edit</Button>
        }

    </Box>
  )
}

export default ProductCardAdmin