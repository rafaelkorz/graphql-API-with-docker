import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("students")
export class Students extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 255 })
  name!: string;

  @Column({ type: "varchar", length: 20 })
  cpf!: string;

  @Column({ type: "varchar", length: 255 })
  email!: string;
}
