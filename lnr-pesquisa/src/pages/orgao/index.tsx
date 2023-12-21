export const OrgaoHistory = () => {
  return (
    <div className="l-container flex-col">
      <form className="flex flex-row gap-1">
        <div>
          <label className="l-inputLabel">Buscar Orgão</label>
        </div>
        <input type="text" className="l-input" />
        <button type="submit" className="l-btn l-bg-primary l-c-secondary">
          Buscar
        </button>
      </form>
      <h1>Orgãos</h1>
    </div>
  );
};
