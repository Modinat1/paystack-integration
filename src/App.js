import React from 'react'
import { useState, useEffect } from 'react'
import FetchPayments from './components/FetchPayments'
import MakePayment from './components/MakePayment/MakePayment'
import axios from 'axios'



const App = () => {
const [transactionData, setTransactionData] = useState([])
const [show, setShow] = useState(true)

  const url = "https://api.paystack.co/transaction"

    const fetchPay = async () => {
        const response = await axios.get(url, {
          headers: { 'Content-Type': 'application/json',
           "Authorization": `Bearer ${process.env.REACT_APP_SECRET_KEY}`},
        })
        const dataResponse = response.data.data
        console.log(dataResponse)
        return dataResponse
        setTransactionData(dataResponse)
        // console.log(transactionData)
    }
    
    // useEffect(() => {
    //   fetchPay()
    // }, [])
  
  

  return (
    <>
    <MakePayment/>
    {/* <FetchPayments transactionData = {transactionData} setTransactionData={setTransactionData} /> */}
    <button onClick={()=> fetchPay()}> fetch Transactions</button>
    <button onClick={()=> setShow(!show)}> set show</button>
    {show ? "show" : "notShow"}
    {transactionData.length = 0 ? (<button onClick={()=> fetchPay()}> fetch Transactions</button>) : (transactionData.map((transaction, index) => {
      const {amount, customer: {first_name, last_name, email}, status, reference } = transaction
    
      return(
         <ul key={index}>
            <li>amount: {amount} </li>
            <li>customer-email: {email} </li>
            <li>First Name: {first_name} </li>
            <li>Last Name: {last_name} </li>
            <li>status: {status} </li>
            <li>reference: {reference} </li>
        </ul>
      )
      
    })) }
  
    </>
  )
}

export default App