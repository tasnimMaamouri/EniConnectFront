import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TokenStorageService } from '../_services/authentication/token-storage.service';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;

  
  
  message:string="";
  classColor:any;
  roles: string[] = [];
  type='';
nbNotif=0;
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private router:Router,private tokenStorage: TokenStorageService,private _snackBar: MatSnackBar,public dialog: MatDialog) { 

  }
 
  

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
  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: 3000,
      data: this.message,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: this.classColor

    });
  }
  
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
  ajouterSecretaire(){
     
    }
  reloadPage(): void {

    window.location.reload();

  }
  logout(){

    this.tokenStorage.signOut();



  }

}
