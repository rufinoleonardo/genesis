import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, total, rmvFromCart, addToCart } = useContext(CartContext);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h1 className="font-medium text-2xl text-center my-4">
        Carrinho de compras
      </h1>

      {cart.length == 0 && (
        <div className="my-4 flex flex-col items-center justify-center">
          <p className="text-lg font-medium">Ops! seu carrinho está vazio...</p>
          <Link
            to="/"
            className="flex items-center justify-center px-3 py-1 mt-4 rounded-lg text-white bg-zinc-800"
          >
            Acessar produtos
          </Link>
        </div>
      )}
      {cart.length > 0 &&
        cart.map((product) => (
          <section
            className="flex items-center justify-between border-b-2 border-gray-300"
            key={product.id}
          >
            <img src={product.cover} alt={product.title} className="w-28" />
            <strong>
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </strong>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => rmvFromCart(product)}
                className="bg-slate-500 px-2 rounded text-white font-medium flex items-center justify-center"
              >
                -
              </button>
              <span>{product.amount}</span>
              <button
                onClick={() => addToCart(product)}
                className="bg-slate-500 px-2 rounded text-white font-medium flex items-center justify-center"
              >
                +
              </button>
            </div>

            <strong className="float-right">
              Subtotal:{" "}
              {product.total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </strong>
          </section>
        ))}

      {cart.length !== 0 && <p>Total: {total}</p>}
    </div>
  );
};
