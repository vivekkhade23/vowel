import { Box, Button, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CartCard from '../Componet/CartCart'
import style from "./style.module.css"


const Cart = () => {
const[cart,setCart]=useState([])
const [render,setRender]=useState(false)
const [total,setTotal]=useState(0)
const navigate=useNavigate()



useEffect(()=>{
fetch("https://vowelapi.onrender.com/cart/")
.then(res=>res.json())
.then(res=>setCart(res))
Total();
},[render])

const Total=()=>{
let sum=0;
for(let i=0;i<cart.length;i++){
    sum=sum+(cart[i].qty*cart[i].price);
}
setTotal(sum)
}

const DeleteCart=()=>{
    fetch('https://vowelapi.onrender.com/cart/', { method: 'DELETE' })
    setRender(!render)
}

const handlePLACED=()=>{
for(let i=0;i<cart.length;i++){
   
       
        fetch("https://vowelapi.onrender.com/order", {
            method: "POST",
            body: JSON.stringify({
                title: cart[i].title,
                price: cart[i].price,
                image: cart[i].image,
                qty: cart[i].qty
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }

        })
}


    navigate("/checkout")
}


  return (
    <Box>
        <Box margin={"35px"} >
            <Button color={"white"} backgroundColor={"#f6895f"}  onClick={DeleteCart}>EmptyCart</Button>
        </Box>
        <Box  className={style.cartdatamapbox}>
        {
            cart?.map((el)=>{
                return <Box key={el._id} className={style.cartboxmap}>
<CartCard id={el._id} image={el.image} title={el.title} price={el.price} qty={1} render={render} setRender={setRender} />

                    </Box>
            })
            
        }
        </Box>
        <Box>
       <Text as={"b"}>
          Total:  {total}
       </Text>
        </Box>
<Box>
    <Button onClick={handlePLACED}  color={"white"} backgroundColor={"#f6895f"} >
        Place Order
    </Button>
</Box>

    </Box>
  )
}

export default Cart