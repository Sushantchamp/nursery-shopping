import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, decrementQuantity, incrementQuantity } from '../../features/cart/cartSlice';
import ContinueShoppingBtn from '../button/ContinueShoppingBtn';

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const removeFromCartHandler = (itemId) => {
    const isConfirmed = window.confirm("Are you sure you want to remove this item from the cart?");

    if (isConfirmed) {
      dispatch(removeFromCart(itemId));
    }
  };
  

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));

  }
  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  }

  // Local Storage
  useEffect(() => {
    localStorage.setItem("localCart", JSON.stringify(items))
  }, [items])

  const CartCard = ({ plant }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={plant.imageUrl}
        alt={plant.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{plant.name}</h3>
        <p className="text-lg text-green-600 mb-2">{plant.price}</p>

        <div className="flex items-center space-x-4 mb-2">
          <button
            onClick={() => handleDecrement(plant.id)}
            className="w-8 h-8 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 transition duration-200"
          >
            <strong>-</strong>
          </button>

          <span className="text-lg font-semibold">{plant.quantity}</span>

          <button
            onClick={() => handleIncrement(plant.id)}
            className="w-8 h-8 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 transition duration-200"
          >
            <strong>+</strong>
          </button>
        </div>

        <button
          onClick={() => removeFromCartHandler(plant.id)}
          className="mt-2 w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200"
        >
          Remove
        </button>
      </div>

    </div>
  );

  return (
    <div className="max-w-screen-md mx-auto p-4">
      <h2 className="text-3xl font-bold text-green-600 mb-6">Added Items</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {items && items.length > 0 ?
          (
            items.map((item) => (
              <CartCard key={item.id} plant={item} />
            ))
          )
          : (
            <div className="flex flex-col items-center justify-center mt-6 space-y-4 animate-fadeIn">
              <span className="text-4xl text-gray-800">😢</span>
              <p className="text-center text-xl font-semibold text-gray-600">
                Your Cart is empty
              </p>
              <p className="text-gray-500 text-sm">
                Looks like you haven't added any plants yet. Start shopping!
              </p>
            </div>
          )}
      </div>

      <div className="flex flex-col space-y-4 w-full max-w-xs">
        <ContinueShoppingBtn />
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
