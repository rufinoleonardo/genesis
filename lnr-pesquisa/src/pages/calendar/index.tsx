export const Calendar = () => {
  return (
    <div>
      <h1 className="text-2xl l-c-selected font-bold text-center my-3">
        BUSCA POR DATA
      </h1>
      <div className="l-container">
        <div className="mr-2">
          <label className="l-inputLabels ml-1">Data Inicial</label>
          <input type="date" className="l-inputs w-24" />
        </div>
        <div>
          <label className="l-inputLabels">Data Final</label>
          <input type="date" className="l-inputs w-24" />
        </div>
      </div>
    </div>
  );
};
