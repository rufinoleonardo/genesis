import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { ProductProps } from "../home";
import { BsCartPlus } from "react-icons/bs";
import { CartContext } from "../../contexts/cartContext";
import toast from "react-hot-toast";

export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductProps>();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function getProduct() {
      api.get(`/products/${id}`).then((res) => {
        setProduct(res.data);
      });
    }

    getProduct();
  }, [id]);

  const handleAddItem = (product: ProductProps) => {
    addToCart(product);
    toast.success("Produto adicionado ao Carrinho.", {
      style: { backgroundColor: "#181818", color: "#FFFFFF" },
      duration: 2000,
    });
    navigate("/cart");
  };

  return (
    <div>
      <main className="w-full max-w-6xl px-4 mx-auto my-6">
        {product && (
          <section className="w-full">
            <div className="flex flex-col lg:flex-row">
              <img
                src={product.cover}
                alt={product.title}
                className="flex-1 w-full max-h-72 object-contain"
              />

              <div className="flex-1">
                <h2 className="font-bold mt-4 mb-2 text-xl">{product.title}</h2>
                <p className="my-4">{product.description}</p>
                <strong className="text-zinc-700 text-xl mr-4">
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
                <button
                  className="bg-zinc-700 rounded-lg p-1"
                  onClick={() => handleAddItem(product)}
                >
                  <BsCartPlus size={20} color="#FFF" />
                </button>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};
