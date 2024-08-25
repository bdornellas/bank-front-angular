import { Component } from '@angular/core';
import { UsuarioService } from './services/usuario.service';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bank-front-angular';
  sidebarOpen=true;
  isLoggedIn = false;
  usuario!: Usuario;

  constructor(private usuarioService:UsuarioService) {
    this.usuarioService.validarUsuario("bruno@email.com","12345678").subscribe((dados:Usuario)=>{
      this.usuario=dados;
      this.isLoggedIn=true;
      //console.log(this.usuario);
  })

  }

  toogleSideBar(){
    this.sidebarOpen=this.sidebarOpen ? false:true;
  }

  ngOnInit(): void {
    alert('Página sendo carregada');

  }
    

  
  logout(): void {
    
  }
  
  
}
