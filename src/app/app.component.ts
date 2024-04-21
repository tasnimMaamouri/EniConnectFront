import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurService } from './_services/UtilisateurService/utilisateur.service';
import { TokenStorageService } from './_services/authentication/token-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EniConnectFront';
  isLoggedIn = false;
  
  link=window.location.pathname;
  test=true;
  CurrentD=new Date();

  constructor(private router:Router,private serviceUtilisateur:UtilisateurService,private tokenStorageService: TokenStorageService) { 
  
  }

ngOnInit(): void {

if(this.link != '/login'){
this.test=false;
}
this.isLoggedIn = !!this.tokenStorageService.getToken(); 

}}

