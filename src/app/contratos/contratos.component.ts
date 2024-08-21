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

  constructor(private contratosService:ContratosService){
    this.contratosService.listarContratos().subscribe((dados:Contrato[])=>{
        console.log("get");
        this.contratos=dados;
        this.dataSource=new MatTableDataSource(this.contratos);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
    })
  }
    dataSource=new MatTableDataSource(this.contratos);
    displayColumns= ["select","_id", "valor","parcelas","produto","dataInclusao"];
    selection= new SelectionModel(true,[]);
    @ViewChild(MatPaginator) paginator!:  MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    ngAfterViewInit(){
      
    }

    selectHandler(row:Contrato){
      this.selection.toggle(row as never);
    }

    

}
