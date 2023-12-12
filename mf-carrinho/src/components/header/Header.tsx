import { useContext } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

import { CartContext } from "../../contexts/cartContext";

export const Header = () => {
  const { cartAmount } = useContext(CartContext);

  return (
    <header className="w-full px-1 bg-slate-200">
      <nav className="flex items-center justify-between max-w-6xl w-full h-14 px-5 mx-auto">
        <Link to="/" className="font-bold text-2xl">
          Dev
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-amber-600">
            Shop
          </span>
        </Link>
        <Link to="/cart" className="relative">
          <FiShoppingCart size={24} color="#121212" />
          {cartAmount > 0 && (
            <span className="absolute -right-4 -top-3 bg-sky-500 rounded-full px-2.5 w-6 h-6 flex items-center justify-center text-white text-xs">
              {cartAmount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
};
