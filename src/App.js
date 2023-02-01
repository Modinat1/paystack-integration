import React from "react";
import { useState, useEffect } from "react";
// import FetchPayments from "./components/FetchPayments";
import MakePayment from "./components/MakePayment/MakePayment";
import axios from "axios";

const App = () => {
	const [transactionData, setTransactionData] = useState([]);
	const [isloading, setisloading] = useState(false);

	const url = "https://api.paystack.co/transaction";

	useEffect(() => {
		const fetchPay = async () => {
			setisloading(true);
			try {
				const response = await axios.get(url, {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
					},
				});
				const dataResponse = response.data.data;
				console.log(dataResponse);
				setTransactionData(dataResponse);
			} catch (error) {
				console.log(error);
			}
			setisloading(false);
			console.log("Data fetch complete");
		};
		fetchPay();
	}, []);

	return (
		<>
			<MakePayment />

			{isloading ? (
				<div>Loading...</div>
			) : (
				transactionData.map((transaction, index) => {
					const {
						amount,
						customer: { first_name, last_name, email },
						status,
						reference,
					} = transaction;
					return (
						<ul key={index}>
							<li>First Name: {first_name}</li>
							<li>Last Name: {last_name}</li>
							<li>Email: {email}</li>
							<li>Amount: {amount}</li>
							<li>Status: {status}</li>
							<li>Refrence: {reference}</li>
						</ul>
					);
				})
			)}

			{/* <FetchPayments transactionData = {transactionData} setTransactionData={setTransactionData} /> */}

			{/* {transactionData.length = 0 ? (<button onClick={()=> fetchPay()}> fetch Transactions</button>) : (transactionData.map((transaction, index) => {
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
   */}
		</>
	);
};

export default App;
