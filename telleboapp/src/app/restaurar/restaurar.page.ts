import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-restaurar',
  templateUrl: './restaurar.page.html',
  styleUrls: ['./restaurar.page.scss'],
})
export class RestaurarPage implements OnInit {
  userForm ={
    usuario:""    
  }
  botonalerta =[
    {
      text:'ok',
      role:'cancel'
    }
  ];
  constructor(private router: Router) {}

 enviar() {
    if (this.userForm.usuario.trim() === '') {
      const alert = document.querySelector('ion-alert');
      if (alert) {
        (alert as any).present(); 
      }
      return;
    }
    
    this.router.navigate(['/home']);
  } 
  ngOnInit() {
  }

}
