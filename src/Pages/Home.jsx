import { Box, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import ProductCard from '../Componet/ProductCard';
import style from "./style.module.css"

const Home = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch("https://vowelapi.onrender.com/product")
            .then(res => res.json())
            .then(res => setData(res))
    }, [])

    const AddToCart = async (id) => {
        try {
            let pro = data.filter((el) => el._id === id)
            fetch("https://vowelapi.onrender.com/cart", {
                method: "POST",
                body: JSON.stringify({
                    title: pro[0].title,
                    price: pro[0].price,
                    image: pro[0].image,
                    qty: 1
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }

            })
            alert(`${pro[0].title} Added to Cart `)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div >

            <Box className={style.datamapbox} >
                {
                    data?.map((el) => {
                        return <Box className={style.boxmap} key={el._id} qty={"hello"} >
                            <ProductCard id={el._id} image={el.image} title={el.title} price={el.price} />
                            <Button color={"white"} backgroundColor={"#f6895f"} onClick={() => AddToCart(el._id)}>
                                Add To Cart
                            </Button>
                        </Box>
                    })
                }
            </Box>

        </div>
    )
}

export default Home