import React from 'react';

import {
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';

import style from "./style.module.css"
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
const navigate=useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (elements == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

alert("order placed successfully");
navigate("/")

    };

    return (
        <form onSubmit={handleSubmit} className={style.paymentMain}>
            <CardElement  />
            <Button backgroundColor={"#f6895f"} color={"white"} type="submit" disabled={!stripe || !elements}>
                Pay
            </Button>
        </form>
    );
};

export default PaymentForm