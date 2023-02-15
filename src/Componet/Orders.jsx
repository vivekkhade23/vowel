import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import SubNavbar from './SubNavbar';
import style from "./style.module.css"
import OrderCart from './OrderCart';


const Orders = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch("https://vowelapi.onrender.com/order")
            .then(res => res.json())
            .then(res => setData(res))
    }, [])

  return (
    <div>
        <SubNavbar/>
        <Box className={style.datamapbox} >
                {
                    data?.map((el) => {
                        return <Box className={style.boxmap} key={el._id} qty={"hello"} >
                            <OrderCart id={el._id} image={el.image} title={el.title} price={el.price} qty={el.qty} />
                          
                        </Box>
                    })
                }
            </Box>

    </div>
  )
}

export default Orders