import React from 'react'
import { useNavigate } from 'react-router-dom'


function ContinueShoppingBtn() {
    const navigate = useNavigate()

    const handleContinueShopping = () => {
        navigate('/products')
    }

    return (
        <button
            onClick={handleContinueShopping}
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"
        >
            Continue Shopping
        </button>
    )
}

export default ContinueShoppingBtn;
