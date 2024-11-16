import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';


// working....

// const Productlist = ({ productsProp }) => {

//   const dispatch = useDispatch()
//   const addToCartHandler = (eachProduct) => {
//     dispatch(addToCart(eachProduct))
//   }

//   return (
//     <>
//       <h1><strong>Product Listing Page</strong></h1>
//       {productsProp.map((categoryObj, categoryIndex) => (
//         <div key={categoryIndex}>
//           <h2><strong>{categoryObj.category}</strong></h2>
//           {categoryObj.products.map((eachProduct) => (
//             <div key={eachProduct.id}>
//               <p>{eachProduct.name} - {eachProduct.price}</p>
//               <button onClick={() => { addToCartHandler(eachProduct) }}>Add to Cart</button>
//             </div>

//           ))}

//         </div>
//       ))}
//     </>
//   )
// }


export const PlantCard = ({ plant, onAddToCart, isAddedToCart }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <img
      src={plant.imageUrl}
      alt={plant.name}
      className="w-full h-40 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{plant.name}</h3>
      <p className="text-lg text-green-600 mb-2">{plant.price}</p>
      <p className="text-gray-600 mb-4">{plant.description}</p>
      <button
        onClick={onAddToCart}
        className={`px-4 py-2 rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300 
          ${isAddedToCart
            ? 'bg-gray-300 text-gray-700 cursor-not-allowed'
            : 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-400'
          }`}
        disabled={isAddedToCart}
      >
        {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  </div>
);

const Productlist = ({ productsProp }) => {
  const dispatch = useDispatch();
  const [cart, setCart] = useState({});

  const addToCartHandler = (eachProduct) => {
    dispatch(addToCart(eachProduct));
    setCart((prevCart) => ({
      ...prevCart,
      [eachProduct.name]: true,
    }));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-green-600 mb-6">
        Product Listing Page
      </h1>

      {productsProp.map((categoryObj, categoryIndex) => (
        <div key={categoryIndex}>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {categoryObj.category}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {categoryObj.products.map((eachProduct) => (
              <PlantCard
                key={eachProduct.id}
                plant={eachProduct}
                onAddToCart={() => addToCartHandler(eachProduct)}
                isAddedToCart={cart[eachProduct.name]}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};


export default Productlist;



