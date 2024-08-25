export interface Usuario {
    _id:string,
    identificacao:String,
    senha:String,
    observacao:String,
    statusUsuario:number,
    dataInclusao:Date,
    atualizacoes:Array<String>
}
