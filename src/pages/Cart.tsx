import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { HeartIcon } from "../components/Decorations";

export default function Cart() {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice } =
    useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#FBF4F0] flex items-center justify-center px-4">
        <div className="text-center">
          <span className="text-7xl mb-6 block">🧺</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#6E4C3B] mb-3 font-[Playfair_Display]">
            Your basket is empty
          </h2>
          <p className="text-[#6E4C3B]/60 mb-8 max-w-md mx-auto font-[Quicksand]">
            Looks like you haven't added any sweet treats yet. Let's fix that!
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#DC8B92] text-white font-semibold rounded-full hover:bg-[#B95A66] transition-all hover:scale-105 font-[Quicksand]"
          >
            <HeartIcon className="w-4 h-4" />
            Browse Menu
          </Link>
        </div>
      </div>
    );
  }

  const deliveryFee = totalPrice >= 35 ? 0 : 5.99;
  const orderTotal = totalPrice + deliveryFee;

  return (
    <div className="min-h-screen bg-[#FBF4F0] pt-8 sm:pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#6E4C3B] font-[Playfair_Display]">
            Your Basket
          </h1>
          <button
            onClick={clearCart}
            className="text-sm text-[#B95A66] hover:text-[#6E4C3B] transition-colors font-medium font-[Quicksand]"
          >
            Clear All
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="bg-[#FFFBF9] rounded-3xl p-4 sm:p-6 shadow-sm border border-pink-100/50 flex flex-col sm:flex-row gap-4 sm:gap-6"
              >
                <div className="w-full sm:w-24 h-28 sm:h-24 bg-gradient-to-br from-[#F9E2DF]/50 to-[#F2CDC9]/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl sm:text-5xl">
                    {item.product.emoji}
                  </span>
                </div>

                <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-[#6E4C3B] text-lg font-[Playfair_Display]">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-[#6E4C3B]/50 font-[Quicksand]">
                      ${item.product.price.toFixed(2)} each
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-pink-200 rounded-full overflow-hidden bg-white">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="px-3 py-1.5 hover:bg-pink-50 transition-colors text-[#B95A66]"
                      >
                        −
                      </button>
                      <span className="px-3 py-1.5 font-semibold text-[#6E4C3B] min-w-[2rem] text-center text-sm font-[Quicksand]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="px-3 py-1.5 hover:bg-pink-50 transition-colors text-[#B95A66]"
                      >
                        +
                      </button>
                    </div>

                    <span className="font-bold text-[#B95A66] text-lg min-w-[5rem] text-right font-[Quicksand]">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>

                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="p-2 text-[#6E4C3B]/30 hover:text-red-400 hover:bg-red-50 rounded-full transition-all"
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
            <div className="bg-[#FFFBF9] rounded-3xl p-6 shadow-sm border border-pink-100/50 sticky top-24">
              <h3 className="text-xl font-bold text-[#6E4C3B] mb-6 font-[Playfair_Display]">
                Order Summary
              </h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-[#6E4C3B]/70 font-[Quicksand]">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#6E4C3B]/70 font-[Quicksand]">
                  <span>Delivery</span>
                  <span>
                    {deliveryFee === 0 ? (
                      <span className="text-emerald-600 font-medium">
                        Free ✨
                      </span>
                    ) : (
                      `$${deliveryFee.toFixed(2)}`
                    )}
                  </span>
                </div>
                {deliveryFee > 0 && (
                  <p className="text-xs text-[#B95A66] bg-[#F9E2DF]/50 p-3 rounded-xl font-[Quicksand]">
                    💡 Add ${(35 - totalPrice).toFixed(2)} more for free
                    delivery!
                  </p>
                )}
                <div className="border-t border-pink-100 pt-3 flex justify-between font-bold text-lg text-[#6E4C3B] font-[Quicksand]">
                  <span>Total</span>
                  <span className="text-[#B95A66]">
                    ${orderTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              <button className="w-full py-3.5 bg-[#DC8B92] hover:bg-[#B95A66] text-white font-semibold rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg font-[Quicksand] mb-4">
                Checkout 💕
              </button>

              <Link
                to="/shop"
                className="w-full py-3 border border-pink-200 text-[#6E4C3B] font-medium rounded-full hover:bg-pink-50 transition-colors text-center block font-[Quicksand]"
              >
                Continue Shopping
              </Link>

              <div className="mt-6 pt-6 border-t border-pink-100 space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#6E4C3B]/50 font-[Quicksand]">
                  <span>🔒</span>
                  <span>Secure checkout</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#6E4C3B]/50 font-[Quicksand]">
                  <span>📦</span>
                  <span>Same-day pickup available</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#6E4C3B]/50 font-[Quicksand]">
                  <span>💝</span>
                  <span>Gift wrapping available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
