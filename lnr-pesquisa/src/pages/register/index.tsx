import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="l-page">
      <div className="l-containerSm flex-col items-center justify-center m-auto">
        <h2 className="l-title1 l-c-text mb-5">Registro</h2>
        <div className="w-full">
          <label htmlFor="" className="l-inputLabel">
            E-mail:
          </label>
          <input type="text" className="l-input" />
        </div>
        <div className="w-full">
          <label htmlFor="" className="l-inputLabel">
            Senha:
          </label>
          <input type="password" className="l-input" />
        </div>
        <div className="w-full">
          <label htmlFor="" className="l-inputLabel">
            Confirme sua senha:
          </label>
          <input type="password" className="l-input" />
        </div>
        <button className="l-btn w-full l-bg-primary l-c-secondary my-2">
          Solicitar Registro
        </button>
        <div className="l-c-primary italic">
          <Link to="/login">Desejo fazer Login</Link>
        </div>
      </div>
    </div>
  );
};
