import {Column, Model, Table} from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';
import { PorteEnum } from 'src/enums/PorteEnum';
import { SexoEnum } from 'src/enums/SexoEnum';
import { StatusEnum } from 'src/enums/StatusEnum';

@Table
export class Animal extends Model<Animal> {

  @Column
  especie: string;

  @Column({
    type: DataType.CHAR(1),
    allowNull: false
  })
  sexo: SexoEnum;

  @Column({
    type: DataType.CHAR(1),
    allowNull: false
  })
  porte: PorteEnum;

  @Column
  idade: number;

  @Column
  ({
    type: DataType.TEXT,
    allowNull: false
  })
  status: StatusEnum;

  @Column
  descricao: string;
}