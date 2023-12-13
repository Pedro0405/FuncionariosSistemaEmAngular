export interface ServiceResponse<T> {
    dados: T;
    menssagem: string;
    sucesso: boolean;
}