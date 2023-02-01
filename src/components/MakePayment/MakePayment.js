// import React, { useState } from "react";
// import paymentImg from "../../images/paymentImg.png"
// import axios from "axios";
// import './makePayment.css'

// const Payment = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [reference, setReference] = useState(null);

//   const handlePayment = async () => {
//     setLoading(true);

//     try {
//       const paymentDetails = {
//         email: "adenikem@yahoo.com",
//         amount: 10000,
//       };

//       const response = await axios.post(
//         "https://api.paystack.co/transaction/initialize",
//         paymentDetails,
//         {
//           headers: {
//             Authorization: "pk_test_b298d476e79aa55787cdc691ef704bac014c6524",
//             "Content-Type": "application/json",
//           }
//         }
//       );

//       if (response.data.status) {
//         setReference(response.data.data.reference);
//         window.location.href = response.data.data.authorization_url;
//       } else {
//         setError(response.data.message);
//       }
//     } catch (error) {
//         console.log(error.message)
//     //   setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <React.Fragment>
//       {loading && <p>Loading...</p>}
//       {/* {error && <p>Error: {error}</p>} */}
//       {reference && <p>Reference: {reference}</p>}

//     <h3 className="heading">MAKE PAYMENT</h3>
//     <div className="form_container">
//         <div className="paymentImg_container">
//             <img src={paymentImg} alt="payment illustration" />
//         </div>

//          <form className="payment_form">
//              <div className='form-group'>
//                 <label htmlFor="name">Name</label>
//                 <input type="text" placeholder='enter name'/>
//             </div>

//              <div className='form-group'>
//                  <label htmlFor="email">Email</label>
//                  <input type="email" placeholder='enter email' />
//              </div>

//              <div className='form-group'>
//                  <label htmlFor="amount">Amount</label>
//                  <input type="number" placeholder='enter amount' />
//              </div>

            
//              <button className="payment_btn" onClick={handlePayment}>PAY</button>
//         </form>
//        {/* <Link to={"/transfer"}> <TransferFunds/> </Link> */}
//     </div>
     
//   </React.Fragment>
//   );
// };

// export default Payment;


// const MakePayment = () => {
//     const [config, setConfig] = useState({
//         name: "",
//         email: "",
//         amount: 0,
//         key: "pk_test_b298d476e79aa55787cdc691ef704bac014c6524"
//     })

// const onSuccess = () => {
//     alert("payment successful")
// }
// const onClose = () => {
//     alert("Opps, not successful")
// }
//  const initializePayment = usePaystackPayment(config);
//  initializePayment(onSuccess, onClose);
//  return (
//     <React.Fragment>
//         <form onSubmit={()=>MakePayment}>
//             <div className='form-group'>
//                 <label htmlFor="name">Name</label>
//                 <input type="text" placeholder='enter name'/>
//             </div>

//             <div className='form-group'>
//                 <label htmlFor="email">Email</label>
//                 <input type="email" placeholder='email' />
//             </div>

//             <div className='form-group'>
//                 <label htmlFor="amount">Amount</label>
//                 <input type="number" placeholder='amount' />
//             </div>

//             <button onClick={() => initiatePayment}> MAKE PAY </button>
//         </form>


//     </React.Fragment>
//   )
// };


  


// export default MakePayment;
import React, { useState } from 'react'
import PaystackPop from '@paystack/inline-js'
import './makePayment.css'
import paymentImg from "../../images/paymentImg.png"

const MakePayment = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [amount, setAmount] = useState("")

  const paystackPayment = (e) => {
    e.preventDefault()
    const payment = new PaystackPop()
    payment.newTransaction({
      key: "pk_test_b298d476e79aa55787cdc691ef704bac014c6524",
      name,
      email,
      amount: amount * 100,
      onSuccess(transaction){
        let message = `Payment Successful!!! Your Reference ID is ${transaction.reference}`
        alert(message)
      setAmount("")
      setName("")
      setEmail("")
      },
      onCancel(){
        alert('Transaction Canceled')
        setAmount("")
      setName("")
      setEmail("")
      }
    })
  }

  return (
    <React.Fragment>
        <h3 className="heading">MAKE PAYMENT</h3>
     <div className="form_container">

      <div className="paymentImg_container">
            <img src={paymentImg} alt="payment illustration" />
      </div>

         <form className="payment_form">
             <div className='form-group'>
                 <label htmlFor="name">Name</label>
                 <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='enter name'/>
             </div>

             <div className='form-group'>
                 <label htmlFor="email">Email</label>
                 <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='email' />
             </div>

             <div className='form-group'>
                 <label htmlFor="amount">Amount</label>
                 <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder='amount' />
            </div>

             <button className="payment_btn" onClick={paystackPayment}> MAKE PAY </button>
        </form>

</div>
    </React.Fragment>
  )
}

export default MakePayment