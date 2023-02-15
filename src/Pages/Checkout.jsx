import { Button, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import  {Address}  from '../redux/action';

function Checkout() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
   let data={
    name:fullName,
    email:email,
    address:address,
    city:city,
    zipCode:zipCode
   }
   dispatch(Address(data))

  };

  return (
    <div>
      <Text as="b">Checkout</Text >
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <Input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        </label>
        <label>
          Email:
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Address:
          <Input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </label>
        <label>
          City:
          <Input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
        </label>
        <label>
          Zip Code:
          <Input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} required />
        </label>
        <Button onClick={()=>{
            navigate("/payment")
        }} type="submit">Place Order</Button>
      </form>
    </div>
  );
}

export default Checkout;
