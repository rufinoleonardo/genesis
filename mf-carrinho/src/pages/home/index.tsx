import { useEffect, useState, useContext } from "react";
import { BsCartPlus } from "react-icons/bs";

import { CartContext } from "../../contexts/cartContext";

import { api } from "../../services/api";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export const Home = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const getProducts = () => {
      api.get("/products").then((res) => {
        setProducts(res.data);
      });
    };

    getProducts();
  }, []);

  const handleAddBtn = (product: ProductProps) => {
    addToCart(product);
    toast.success("Item adicionado ao carrinho.", {
      style: {
        backgroundColor: "#282828",
        color: "#FFF",
      },
      duration: 2000,
    });
  };

  return (
    <div>
      <main className="w-full max-w-6xl px-4 mx-auto">
        <h1 className="font-bold text-center text-2xl mb-4 mt-11">
          Produtos em alta
        </h1>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <section className="w-full" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img
                  className="w-full rounded-lg max-h-70 mb-2"
                  src={product.cover}
                  alt="airpods"
                />
                <p>{product.title}</p>
              </Link>
              <div className="flex items-center gap-5">
                <strong>
                  {product.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
                <button
                  className="bg-slate-600 rounded p-1"
                  onClick={() => handleAddBtn(product)}
                >
                  <BsCartPlus color="#FFF" size={20} />
                </button>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};
