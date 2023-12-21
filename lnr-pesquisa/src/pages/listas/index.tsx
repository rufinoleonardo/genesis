import TabelaGenerica from "@/components/genericTable/GenericTable";
import { Column } from "@tanstack/react-table";

interface DadosProps {
  cpf: string;
  nome: string;
  idade: number;
  [key: string]: unknown;
}

const colunas: Column<DadosProps>[] = [
  {
    header: "CPF",
    accessorKey: "cpf" as const, // Chave correspondente aos dados
  },
  {
    header: "Nome",
    accessorKey: "nome" as const, // Chave correspondente aos dados
  },
  {
    header: "Idade",
    accessorKey: "idade" as const,
  },
  // Adicione mais colunas conforme necessário
];

const dados: DadosProps[] = [
  { cpf: "000.000.000-00", nome: "João", idade: 25 },
  { cpf: "000.000.000-01", nome: "Maria", idade: 12 },
  // Adicione mais linhas conforme necessário
] as const;

export const Listas: React.FC = () => {
  return (
    <div>
      <h1>Tabela Exemplo</h1>
      <TabelaGenerica<DadosProps>
        columns={colunas as Column<DadosProps>[]}
        data={dados}
      />
    </div>
  );
};

export default Listas;
