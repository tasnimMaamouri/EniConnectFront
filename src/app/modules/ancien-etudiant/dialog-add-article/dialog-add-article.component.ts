import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Data, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/authentication/token-storage.service';
import { SnackBarComponent } from 'src/app/snack-bar/snack-bar.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ArticleService } from 'src/app/_services/ArticleService/article.service';
import { AncienEtudiantService } from 'src/app/_services/AncienEtudiantService/ancien-etudiant.service';
@Component({
  selector: 'app-dialog-add-article',
  templateUrl: './dialog-add-article.component.html',
  styleUrls: ['./dialog-add-article.component.css']
})
export class DialogAddArticleComponent implements OnInit {
  @Output() articleadded = new EventEmitter<void>();

  public CurrentD = new Date();
  message:string="";
  classColor:any;
  close:boolean=false;
  
  
  isLoggedIn = false;

  articleForm = this.formBuilder.group({
    title: ['', Validators.required],
    content:['', Validators.required],
    videoUrl:['', Validators.required],
    ancienEtudiant:['']
   
  });
  public myError = (controlName: string, errorName: string) => {
    return this.articleForm.controls[controlName].hasError(errorName);
  }

  constructor(private formBuilder: FormBuilder,private tokenStorage: TokenStorageService,private _snackBar: MatSnackBar, private service:ArticleService,  private serviceAncienEtudiant: AncienEtudiantService,
   ){}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    if (this.isLoggedIn) {
    const currentUser = this.tokenStorage.getUser();
    
   
   
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
  onSubmitArticle() {
   
    
    
     
      this.isLoggedIn = !!this.tokenStorage.getToken();
      if (this.isLoggedIn) {
      const currentUser = this.tokenStorage.getUser();
      this.serviceAncienEtudiant.getAncienEtudiantByEmail(currentUser.email).subscribe((data)=>{
        this.articleForm.value.ancienEtudiant=data;
        this.service.addArticle(this.articleForm.value).subscribe((data) => {
        this.message="Article bien ajoutée";
        this.classColor='success';
        this.openSnackBar();
        this.articleadded.emit();

        this.close=true;
        
        },
        error=>{
          this.message=error.error;
          this.classColor="danger";
          this.openSnackBar();
          this.close=false;
        }
        ); })
      }
 
    
  }


}
