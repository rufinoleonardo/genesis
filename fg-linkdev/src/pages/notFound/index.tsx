import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen text-white">
      <h1 className="font-bold text-6xl mb-4">404</h1>
      <h1 className="font-bold text-4xl mb-4">Página não localizada.</h1>
      <p className="italix text-1xl mb-4">
        Você caiu em uma página que não existe.
      </p>

      <Link to="/" className="bg-gray-50/20 py-1 px-4 rounded-md">
        Voltar para HOME
      </Link>
    </div>
  );
};
