import React from 'react'

const FetchPayments = (props) => {
  const {transactionData} = props
  return (
      <>
    {transactionData.map((transaction, index) => {
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
      
    })}
    </>
  )
}

export default FetchPayments