import { FaPlusCircle, FaTimes, FaTrash, FaSave } from "react-icons/fa";
import TabelaGenerica from "@/components/genericTable/GenericTable";
import { Column } from "@tanstack/react-table";

interface DadosProps {
  cnpj: string;
  uf: string;
  nome: string;
  lotes: number;
  [key: string]: unknown;
}

const colunas: Column<DadosProps>[] = [
  {
    header: "CNPJ",
    accessorKey: "cnpj" as const, // Chave correspondente aos dados
  },
  {
    header: "UF",
    accessorKey: "uf" as const, // Chave correspondente aos dados
  },
  {
    header: "Nome",
    accessorKey: "nome" as const, // Chave correspondente aos dados
  },
  {
    header: "Lotes",
    accessorKey: "lotes" as const,
  },
  // Adicione mais colunas conforme necessário
];

const dados: DadosProps[] = [
  {
    cnpj: "000.000.000-00",
    uf: "SP",
    nome: "FUNDAÇÃO MUNICIPAL DE SAÚDE DE RIO CLARO",
    lotes: 1,
  },
  {
    cnpj: "000.000.000-01",
    uf: "PR",
    nome: "PREFEITURA MUNICIPAL DE ROLÂNDIA",
    lotes: 1,
  },
  {
    cnpj: "000.000.000-02",
    uf: "ES",
    nome: "PREFEITURA MUNICIPAL DE VITORIA",
    lotes: 1402,
  },
  {
    cnpj: "000.000.000-03",
    uf: "MG",
    nome: "PREFEITURA MUNICIPAL DE SETE LAGOAS",
    lotes: 4,
  },
  {
    cnpj: "000.000.000-03",
    uf: "PR",
    nome: "PREFEITURA MUNICIPAL DE PONTA GROSSA",
    lotes: 21,
  },
  {
    cnpj: "000.000.000-03",
    uf: "SP",
    nome: "PREFEITURA MUNICIPAL DE SÃO PAULO",
    lotes: 320,
  },
  {
    cnpj: "000.000.000-00",
    uf: "SP",
    nome: "FUNDAÇÃO MUNICIPAL DE SAÚDE DE RIO CLARO",
    lotes: 1,
  },
  {
    cnpj: "000.000.000-01",
    uf: "PR",
    nome: "PREFEITURA MUNICIPAL DE ROLÂNDIA",
    lotes: 1,
  },
  {
    cnpj: "000.000.000-02",
    uf: "ES",
    nome: "PREFEITURA MUNICIPAL DE VITORIA",
    lotes: 1402,
  },
  {
    cnpj: "000.000.000-03",
    uf: "MG",
    nome: "PREFEITURA MUNICIPAL DE SETE LAGOAS",
    lotes: 4,
  },
  {
    cnpj: "000.000.000-03",
    uf: "PR",
    nome: "PREFEITURA MUNICIPAL DE PONTA GROSSA",
    lotes: 21,
  },
  {
    cnpj: "000.000.000-03",
    uf: "SP",
    nome: "PREFEITURA MUNICIPAL DE SÃO PAULO",
    lotes: 320,
  },
  {
    cnpj: "000.000.000-00",
    uf: "SP",
    nome: "FUNDAÇÃO MUNICIPAL DE SAÚDE DE RIO CLARO",
    lotes: 1,
  },
  {
    cnpj: "000.000.000-01",
    uf: "PR",
    nome: "PREFEITURA MUNICIPAL DE ROLÂNDIA",
    lotes: 1,
  },
  {
    cnpj: "000.000.000-02",
    uf: "ES",
    nome: "PREFEITURA MUNICIPAL DE VITORIA",
    lotes: 1402,
  },
  {
    cnpj: "000.000.000-03",
    uf: "MG",
    nome: "PREFEITURA MUNICIPAL DE SETE LAGOAS",
    lotes: 4,
  },
  {
    cnpj: "000.000.000-03",
    uf: "PR",
    nome: "PREFEITURA MUNICIPAL DE PONTA GROSSA",
    lotes: 21,
  },
  {
    cnpj: "000.000.000-03",
    uf: "SP",
    nome: "PREFEITURA MUNICIPAL DE SÃO PAULO",
    lotes: 320,
  },

  // Adicione mais linhas conforme necessário
] as const;

export const Pesquisa = () => {
  return (
    <div className="l-page">
      <div className="flex flex-col">
        {/* TITULO DA PAGINA */}
        <div className="flex flex-row items-center justify-center mb-5">
          <div>
            <h1 className="l-c-selected l-title1">Pesquisa Concorrentes</h1>
          </div>
        </div>

        {/* AREA PRINCIPAL */}
        <div className="flex flex-row gap-2">
          {/* AREA DE INPUTS */}
          <div className="l-flex1 w-full flex flex-col gap-2">
            {/* DATA E PLATAFORMA */}
            <section className="l-container flex-col l-flex1 gap-1">
              <h2 className="l-c-text l-title2">Dados Pesquisa</h2>

              {/* INPUTS DATA PESQUISA E PLATAFORMA */}
              <div className="flex flex-row gap-2">
                <div className="l-flex1 flex flex-col">
                  <label className="l-inputLabel">Data Pesquisa</label>
                  <input type="date" className="l-input" />
                </div>

                <div className="l-flex3 flex flex-col">
                  <label className="l-inputLabel">Plataforma</label>
                  <select className="l-input">
                    <option value="1">BLL</option>
                    <option value="1">BNC</option>
                    <option value="1">PCP</option>
                  </select>
                </div>
              </div>
            </section>

            {/* DADOS PROCESSO */}
            <section className="l-container flex-col l-flex2 gap-1">
              <h2 className="l-c-text l-title2">Dados processo</h2>

              <div className="flex flex-row items-end gap-2">
                <div className="l-flex2">
                  <label className="l-inputLabel">Tipo Processo</label>
                  <select className="l-input">
                    <option value="">Select</option>
                  </select>
                </div>
                <div className="l-flex2 flex flex-col">
                  <label className="l-inputLabel">Buscar Orgão Público</label>
                  <input type="text" className="l-input"></input>
                </div>
                <div className="l-flex1 flex flex-row items-center max-w-full gap-2">
                  <button className="l-btn l-bg-primary l-c-secondary">
                    Buscar
                  </button>
                </div>
              </div>

              <div className="flex-col">
                <div className="flex flex-row gap-2">
                  <div className="l-flex1">
                    <label className="l-inputLabel">Lotes</label>
                    <input
                      type="number"
                      min={1}
                      className="l-input text-center"
                    ></input>
                  </div>
                  <div className="l-flex1">
                    <label className="l-inputLabel">Nº Edital</label>
                    <input type="test" className="l-input text-center"></input>
                  </div>
                  <div className="l-flex1">
                    <label className="l-inputLabel">Inicio Propostas</label>
                    <input type="date" className="l-input"></input>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-2">
                <div className="l-flex3">
                  <label className="l-inputLabel">Resumo Objeto</label>
                  <input type="text" className="l-input"></input>
                </div>
                <div className="l-flex1 flex flex-row items-end gap-2">
                  <button className="l-btn l-bg-primary l-c-secondary">
                    <FaPlusCircle size={22} />
                  </button>
                  <button className="l-btn l-outlineDanger l-c-secondary">
                    <FaTimes size={22} />
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* TABELA */}
          <div className="l-flex2 w-full h-full">
            <TabelaGenerica columns={colunas} data={dados} />
          </div>
        </div>
      </div>

      {/* FINALIZAR DIA */}
      <div className="lflex flex flex-row items-end justify-end gap-2">
        <button className="l-btn l-btn-success">
          <FaSave size={16} />
        </button>
        <button className="l-btn l-outlineDanger">
          <FaTrash size={16} />
        </button>
      </div>
    </div>
  );
};
