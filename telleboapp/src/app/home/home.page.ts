import { Component } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userForm ={
    usuario:"",
    password:""
  }
  botonalerta =[
    {
      text:'ok',
      role:'cancel'
    }
  ];
  constructor(private router: Router) {}
  goBack(){
    this.router.navigate(['/bienvenida']);
  }
  navigateToOtherPage() {
    if (this.userForm.usuario.trim() === '' || this.userForm.password.trim() === '') {
      const alert = document.querySelector('ion-alert');
      if (alert) {
        (alert as any).present(); 
      }
      return;
    }
    
    let navigationExtras: NavigationExtras = {
      state: { usuario: this.userForm.usuario }
    };
    this.router.navigate(['/bienvenida'], navigationExtras);
  } 

}
