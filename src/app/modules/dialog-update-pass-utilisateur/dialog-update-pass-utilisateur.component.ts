import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Data } from '@angular/router';
import { UtilisateurService } from 'src/app/_services/UtilisateurService/utilisateur.service';
import { Utilisateur } from 'src/app/models/utilisateur';
import { SnackBarComponent } from 'src/app/snack-bar/snack-bar.component';
@Component({
  selector: 'app-dialog-update-pass-utilisateur',
  templateUrl: './dialog-update-pass-utilisateur.component.html',
  styleUrls: ['./dialog-update-pass-utilisateur.component.css']
})
export class DialogUpdatePassUtilisateurComponent implements OnInit {

  hide=true;
  classColor: any;
  message: string = "";
  utilisateurForm=this.formBuilder.group({
    aciennceMotDePasse:[''],
    motDePasse: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(40)
      ]
    ],
    
  });
  utilisateurForm1=this.formBuilder.group({
  
    motDePasse:[
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(40)
      ]
    ],
    
  });
  constructor(private serviceUtilisateur:UtilisateurService ,private _snackBar: MatSnackBar, private formBuilder: FormBuilder,public dialogRef: MatDialogRef<DialogUpdatePassUtilisateurComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Data) { }
   
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
  

  this.utilisateurForm1.value.motDePasse=this.utilisateurForm.value.motDePasse;
    var ancienneMotDePasse=this.utilisateurForm.value.aciennceMotDePasse;
    
    this.serviceUtilisateur.updateUtilisateur(this.data.utilisateur.id,ancienneMotDePasse,this.utilisateurForm1.value).subscribe(() => {
      

      this.dialogRef.close(true);
      

    },error=>{
      if(error.status==401){
        this.message = "ancienne mot de passe incorrect";
        this.classColor = 'danger';
        this.openSnackBar();
      }else{
        this.message = error.error;
        this.classColor = 'danger';
        this.openSnackBar();
      }
      
    }
    )

  }
  onClose(){
    this.dialogRef.close(false)
  }

}
