import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/authentication/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private roles: string[] = [];
  isLoggedIn = false;
  sideBarOpen = true;
  type='';
  constructor(private tokenStorage: TokenStorageService,private router:Router
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    if (this.isLoggedIn) {
    const currentUser = this.tokenStorage.getUser();
    this.roles = currentUser.roles;
    if(this.roles.includes('ROLE_ADMIN')){
      this.type="admin";
      this.router.navigate(['/admin/agenda']);
    }else if(this.roles.includes('ROLE_ANCIENETUDIANT')){
      this.type="ancienEtudiant";
      this.router.navigate(['/ancienEtudiant/agenda']);
    }else if(this.roles.includes('ROLE_NOUVEAUETUDIANT')){
      this.type="nouveauEtudiant";
      this.router.navigate(['/nouveauEtudiant/agenda']);
    }
  }
}
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }


}
