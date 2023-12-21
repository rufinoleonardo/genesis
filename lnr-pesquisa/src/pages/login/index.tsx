import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="l-page">
      <div className="l-containerSm flex-col items-center justify-center m-auto">
        <h2 className="l-title1 l-c-text mb-5">Login</h2>
        <div className="w-full">
          <label htmlFor="" className="l-inputLabel">
            E-mail
          </label>
          <input type="text" className="l-input" />
        </div>
        <div className="w-full">
          <label htmlFor="" className="l-inputLabel">
            Senha
          </label>
          <input type="password" className="l-input" />
        </div>

        <button className="l-btn w-full l-bg-primary l-c-secondary my-2">
          Entrar
        </button>

        <div className="l-c-primary italic">
          <Link to="/register">Ainda não possuo uma conta.</Link>
        </div>
      </div>
    </div>
  );
};
