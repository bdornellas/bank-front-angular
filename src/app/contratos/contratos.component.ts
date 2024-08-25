import { Component, ViewChild } from '@angular/core';
import { Contrato } from '../models/contrato';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ContratosService } from '../services/contratos.service';

let LISTA_CONTRATOS: Contrato[]= [
  
];

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.scss']
})
export class ContratosComponent {

  contratos: Contrato[]=[]
  totalContratos: Number=0;
  valorTotal: number=0;

  constructor(private contratosService:ContratosService){
    this.contratosService.listarContratos().subscribe((dados:Contrato[])=>{
        this.contratos=dados;
        this.totalContratos=dados.length;
        this.contratos.forEach(element => {
          console.log(this.valorTotal + "" + element.valor);
          this.valorTotal = this.valorTotal+element.valor;
        });
        this.tabelaContratos=new MatTableDataSource(this.contratos);
        this.tabelaContratos.paginator=this.paginator;
        this.tabelaContratos.sort=this.sort;
    })
  }
    tabelaContratos=new MatTableDataSource(this.contratos);
    displayColumns= ["select","_id", "valor","parcelas","produto","dataInclusao","statusContrato"];
    selection= new SelectionModel(true,[]);
    @ViewChild(MatPaginator) paginator!:  MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    ngAfterViewInit(){
      
    }

    selectHandler(row:Contrato){
      this.selection.toggle(row as never);
    }
    

    

}
