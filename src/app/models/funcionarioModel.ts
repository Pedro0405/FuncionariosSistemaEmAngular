export interface FuncionarioModel {
    id: number;
    nome: string;
    sobrenome: string;
    departamento: string;
    turno: string;
    ativo: boolean;
    dataCriacao?: string;
    ultimaAtualização?: string;
}