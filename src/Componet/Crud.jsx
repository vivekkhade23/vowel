import { Box, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ProductCardAdmin from './ProductAdmin';
import style from "./style.module.css"
import SubNavbar from './SubNavbar';

const Crud = () => {
    const [data, setData] = useState([]);
    const [render,setRender]=useState(false)
   


    useEffect(() => {
        fetch("https://vowelapi.onrender.com/product")
            .then(res => res.json())
            .then(res => setData(res))
    }, [render])


    const DeleteItem = async (id) => {
        try {
            fetch(`https://vowelapi.onrender.com/product/${id}`, {         method: "Delete" })
         setRender(!render)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <Box>
        <SubNavbar/>
  <Box className={style.datamapbox} >
                {
                    data?.map((el) => {
                        return <Box className={style.boxmap} key={el._id} qty={"hello"} >
                            <ProductCardAdmin id={el._id} image={el.image} title={el.title} price={el.price} setRender={setRender} render={render} />
                            <Button color={"white"} backgroundColor={"#f6895f"} onClick={() => DeleteItem(el._id)}>
                                Delete
                            </Button>

                        </Box>
                    })
                }
            </Box>

    </Box>
  )
}

export default Crud