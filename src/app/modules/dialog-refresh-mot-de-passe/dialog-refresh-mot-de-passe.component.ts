import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Data } from '@angular/router';
import { UtilisateurService } from 'src/app/_services/UtilisateurService/utilisateur.service';
import { SnackBarComponent } from 'src/app/snack-bar/snack-bar.component';

@Component({
  selector: 'app-dialog-refresh-mot-de-passe',
  templateUrl: './dialog-refresh-mot-de-passe.component.html',
  styleUrls: ['./dialog-refresh-mot-de-passe.component.css']
})
export class DialogRefreshMotDePasseComponent implements OnInit {
  classColor: any;
  message: string = "";
  constructor(private serviceUtilisateur:UtilisateurService,private _snackBar: MatSnackBar,private formBuilder: FormBuilder,public dialogRef: MatDialogRef<DialogRefreshMotDePasseComponent>,
   ) { }
  utilisateurForm=this.formBuilder.group({
  
    email: ['', [Validators.required, Validators.email]],
    
  });
  ngOnInit(): void {
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
  onSubmit(){
   
    
    this.serviceUtilisateur.getUtilisateurByEmail(this.utilisateurForm.value.email).subscribe((utilisateur)=>{
      function makeRandom(lengthOfCode: number, possible: string) {
        let text = "";
        for (let i = 0; i < lengthOfCode; i++) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
          return text;
      }
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890/-";
      const lengthOfCode = 8;

     var password= makeRandom(lengthOfCode, possible);
      utilisateur.motDePasse=password;
    
      const utilisateurSendT={id:utilisateur.id,"email":this.utilisateurForm.value.email,"motDePasse":password,"roles":utilisateur.roles}
      
      this.serviceUtilisateur.sendEmail(this.utilisateurForm.value.email,"votre mot de passe est: "+password,"Cabinet:compte activé").subscribe((data)=>{
        this.serviceUtilisateur.refreshMotDePasse(utilisateurSendT.id,utilisateurSendT).subscribe(()=>{
        this.dialogRef.close(true);
      })
   
     }) 
      
   

    },
    error=>{
      if(error.status==404){
        this.message = "email n'est pas inscrit";
        this.classColor = 'danger';

        this.openSnackBar();
      }
      
    })

  }
  onClose(){
    this.dialogRef.close(false)
  }


}
