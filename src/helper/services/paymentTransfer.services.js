import axiosInstance from "../axios_config/axios_config_paymentTransfer";

const verifyAcct = async () => {
    try{
        const res = await axiosInstance.get("/bank/resolve")
        console.log(res)
    }catch(error){
        console.log(error)
    }
}

const PaymentTransfer = {
    verifyAcct,
}

export default PaymentTransfer;