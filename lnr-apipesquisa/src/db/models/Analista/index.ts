import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { AnalistaProps } from "./analistaProps";

@Entity("analistas")
class Analista implements AnalistaProps {
  @PrimaryGeneratedColumn("rowid") id: number;

  @Column("varchar", { length: 100, nullable: false }) nome: string;

  @Column("enum", {
    enum: ["COMERCIAL INTERNO", "COMERCIAL EXTERNO", "RELACIONAMENTO"],
  })
  setor: "COMERCIAL INTERNO" | "COMERCIAL EXTERNO" | "RELACIONAMENTO";
}

export default Analista;
