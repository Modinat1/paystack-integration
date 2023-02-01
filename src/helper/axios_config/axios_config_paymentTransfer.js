import axios from "axios"

const axiosInstance = axios.create({
        baseURL: `${process.env.REACT_APP_PAYMENT_TRANSFER}`,
        headers: {
            Accepted: "application/json",
            "Content-Type": "application/json",
        },
})

export default axiosInstance;