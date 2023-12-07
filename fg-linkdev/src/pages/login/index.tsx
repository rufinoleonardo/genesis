import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { FormEvent, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Preencha todos os campos.");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("LOGGADO");
        navigate("/admin");
      })
      .catch((error) => {
        console.log("Erro ao fazer o login.");
        console.log(error);
      });
  };

  return (
    <div className="flex w-full h-screen justify-center items-center flex-col">
      <Link to={"/"}>
        <h1 className="mt-11 text-white mb-7 font-bold text-5xl">
          Dev
          <span className="bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">
            Link
          </span>
        </h1>
      </Link>
      <form
        className="w-full max-w-xl flex flex-col px-2"
        onSubmit={handleSubmit}
      >
        <Input
          placeholder="Digite o seu e-mail aqui..."
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="******"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="h-9 bg-blue-600 rounded border-0 text-lg font-medium text-white"
        >
          Acessar
        </button>
      </form>
    </div>
  );
};
