import { SexoEnum } from "src/enums/SexoEnum";
import { StatusEnum } from "src/enums/StatusEnum";
import { PorteEnum } from "src/enums/PorteEnum";

export class CreateAnimalDto {
    especie: string;
    sexo: SexoEnum;
    porte: PorteEnum;
    idade: number;
    status: StatusEnum;
    descricao: string;
}