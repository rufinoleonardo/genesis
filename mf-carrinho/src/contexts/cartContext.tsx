import { ReactNode, createContext, useState } from "react";
import { ProductProps } from "../pages/home";

interface CartProps {
  cart: CartProductsProps[];
  cartAmount: number;
  addToCart: (product: ProductProps) => void;
  rmvFromCart: (product: ProductProps) => void;
  total: string;
}

interface CartProductsProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartProps);

const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartProductsProps[]>([]);
  const [total, setTotal] = useState("");

  const addToCart = (product: ProductProps) => {
    const indexFinded = cart.findIndex((item) => item.id == product.id);

    if (indexFinded !== -1) {
      let cartList = cart;
      cartList[indexFinded].amount = cartList[indexFinded].amount + 1;
      cartList[indexFinded].total =
        cartList[indexFinded].amount * cartList[indexFinded].price;

      setCart(cartList);
      cartTotal(cartList);
      return;
    }

    let data: CartProductsProps = {
      amount: 1,
      total: product.price,
      ...product,
    };

    setCart((products) => [...products, data]);
    console.log(data);
    cartTotal([...cart, data]);
  };

  const rmvFromCart = (product: ProductProps) => {
    const indexFinded = cart.findIndex((item) => item.id === product.id);

    if (cart[indexFinded]?.amount > 1) {
      // diminuir um item do amount;
      cart[indexFinded].amount = cart[indexFinded].amount - 1;
      cart[indexFinded].total =
        cart[indexFinded].total - cart[indexFinded].price;
      setCart(cart);
      cartTotal(cart);
      return;
    }

    const removingItem = cart.filter((el) => el.id !== product.id);
    setCart(removingItem);
    cartTotal(removingItem);
  };

  const cartTotal = (items: CartProductsProps[]) => {
    const myCart = items;
    let result = myCart.reduce((acc, obj) => acc + obj.total, 0);
    const format = result.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    setTotal(format);
  };

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        cartAmount: cart.length,
        addToCart,
        rmvFromCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
