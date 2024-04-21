import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../_services/authentication/auth.service';
import { TokenStorageService } from '../_services/authentication/token-storage.service';
import { DialogRefreshMotDePasseComponent } from '../modules/dialog-refresh-mot-de-passe/dialog-refresh-mot-de-passe.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide=true;
  utilisateurForm=this.formBuilder.group({
    
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(40)
      ]
    ],
    
  });
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
    constructor(public dialog: MatDialog,private router:Router,private authService: AuthService, private tokenStorage: TokenStorageService,private formBuilder: FormBuilder) { }
  
    ngOnInit(): void {
     
      if (this.tokenStorage.getToken()) {
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
      }
    }
    onSubmit(): void {
      const { email, password } = this.utilisateurForm.value;
      console.log(this.utilisateurForm.value);
      console.log(email+"/"+password)
      this.authService.login(this.utilisateurForm.value).subscribe(
        data => {
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;
          this.reloadPage();
         
        },
        err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      );
    }
    reloadPage(): void {
      window.location.reload();
    }
    logout(){
      this.tokenStorage.signOut();
      this.reloadPage();
    }
    
    RefreshMotDepasse(){
      const dialogRef = this.dialog.open(DialogRefreshMotDePasseComponent, {
                  
            
      });
    }
  

}
