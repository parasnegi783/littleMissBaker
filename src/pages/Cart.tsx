import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice } =
    useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white pt-20 sm:pt-24 flex items-center justify-center">
        <div className="text-center px-4">
          <span className="text-7xl mb-6 block">🛒</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            Your Cart is Empty
          </h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Looks like you haven't added anything to your cart yet. Explore our
            delicious baked goods!
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-3 bg-amber-600 text-white font-semibold rounded-full hover:bg-amber-700 transition-all hover:scale-105"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  const deliveryFee = totalPrice >= 30 ? 0 : 5.99;
  const orderTotal = totalPrice + deliveryFee;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-amber-950">
            Shopping Cart
          </h1>
          <button
            onClick={clearCart}
            className="text-sm text-red-500 hover:text-red-700 transition-colors font-medium"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-amber-50 flex flex-col sm:flex-row gap-4 sm:gap-6"
              >
                {/* Image */}
                <Link
                  to={`/product/${item.product.id}`}
                  className="w-full sm:w-24 h-32 sm:h-24 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl flex items-center justify-center flex-shrink-0"
                >
                  <span className="text-4xl sm:text-5xl">
                    {item.product.image}
                  </span>
                </Link>

                {/* Details */}
                <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <Link
                      to={`/product/${item.product.id}`}
                      className="font-semibold text-gray-800 hover:text-amber-700 transition-colors text-lg"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">
                      ${item.product.price.toFixed(2)} each
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Quantity */}
                    <div className="flex items-center border border-amber-200 rounded-full overflow-hidden">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="px-3 py-1.5 hover:bg-amber-50 transition-colors text-amber-700"
                      >
                        −
                      </button>
                      <span className="px-3 py-1.5 font-semibold text-gray-800 min-w-[2rem] text-center text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="px-3 py-1.5 hover:bg-amber-50 transition-colors text-amber-700"
                      >
                        +
                      </button>
                    </div>

                    {/* Price */}
                    <span className="font-bold text-amber-800 text-lg min-w-[5rem] text-right">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>

                    {/* Remove */}
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100 sticky top-24">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Order Summary
              </h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery</span>
                  <span>
                    {deliveryFee === 0 ? (
                      <span className="text-green-600 font-medium">Free</span>
                    ) : (
                      `$${deliveryFee.toFixed(2)}`
                    )}
                  </span>
                </div>
                {deliveryFee > 0 && (
                  <p className="text-xs text-amber-600 bg-amber-50 p-2 rounded-lg">
                    💡 Add ${(30 - totalPrice).toFixed(2)} more for free
                    delivery!
                  </p>
                )}
                <div className="border-t border-amber-100 pt-3 flex justify-between font-bold text-lg text-gray-800">
                  <span>Total</span>
                  <span className="text-amber-800">
                    ${orderTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              <button className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg mb-4">
                Proceed to Checkout
              </button>

              <Link
                to="/shop"
                className="w-full py-3 border border-amber-200 text-amber-700 font-medium rounded-full hover:bg-amber-50 transition-colors text-center block"
              >
                Continue Shopping
              </Link>

              {/* Trust badges */}
              <div className="mt-6 pt-6 border-t border-amber-100 space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>🔒</span>
                  <span>Secure checkout</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>↩️</span>
                  <span>Easy returns within 24h</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>💳</span>
                  <span>Multiple payment options</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
