import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Data, Router } from '@angular/router';
import { AncienEtudiantService } from 'src/app/_services/AncienEtudiantService/ancien-etudiant.service';
import { ArticleService } from 'src/app/_services/ArticleService/article.service';
import { TokenStorageService } from 'src/app/_services/authentication/token-storage.service';
import { SnackBarComponent } from 'src/app/snack-bar/snack-bar.component';

@Component({
  selector: 'app-dialog-update-article',
  templateUrl: './dialog-update-article.component.html',
  styleUrls: ['./dialog-update-article.component.css']
})
export class DialogUpdateArticleComponent implements OnInit {
  @Output() articleUpdated = new EventEmitter<void>();

  close:boolean=false;
  message:string="";
  classColor:any;
  articleForm = this.formBuilder.group({
    title: [''],
    content: [''],
    videoUrl: [''],
    ancienEtudiant:['']
  });
  selected:any;
  isLoggedIn = false;

  constructor(private tokenStorage: TokenStorageService,private serviceAncienEtudiant:AncienEtudiantService, private _snackBar: MatSnackBar, private service: ArticleService,private formBuilder: FormBuilder,public dialogRef: MatDialogRef<DialogUpdateArticleComponent>,
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
  onSubmitArticle() {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    console.log(this.articleForm.value)
  if (this.isLoggedIn) {
  const currentUser = this.tokenStorage.getUser();
    this.serviceAncienEtudiant.getAncienEtudiantByEmail(currentUser.email).subscribe((data)=>{
      this.articleForm.value.ancienEtudiant=data;
      this.service.updateArticle(this.articleForm.value, this.data.article.id).subscribe((data) => {
        this.message="article bien modifié";
        this.classColor='success';
        this.openSnackBar();
        this.articleUpdated.emit();

        this.close=true;
        
      },
      error=>{
        if(error.status==404){
          this.message="article introuvable";
          this.classColor='danger';
          this.openSnackBar();
          this.close=false;
        }
        this.message=error.error;
        this.classColor='danger';
        this.openSnackBar();
        this.close=false;
      });
    })}
    
   
  }
}
