export interface Contrato {
    _id:string,
    cpfCredor: string,
    nomeCredor:string,
    cpfCliente:string,
    nomeCliente:string,
    valor:number,
    parcelas:number,
    produto:string,
    metodoPagamento:string,
    //atualizacoes:Array<Object>



    statusContrato:number,
    dataInclusao: Date
}
