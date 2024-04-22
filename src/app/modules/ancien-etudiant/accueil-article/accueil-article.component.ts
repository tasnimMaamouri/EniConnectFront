import { Component, OnInit } from '@angular/core';
import { AncienEtudiantService } from 'src/app/_services/AncienEtudiantService/ancien-etudiant.service';
import { AncienEtudiant } from 'src/app/models/AncienEtudiant';
import { Article } from 'src/app/models/article';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TokenStorageService } from 'src/app/_services/authentication/token-storage.service';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/_services/ArticleService/article.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddArticleComponent } from '../dialog-add-article/dialog-add-article.component';


@Component({
  selector: 'app-accueil-article',
  templateUrl: './accueil-article.component.html',
  styleUrls: ['./accueil-article.component.css']
})
export class AccueilArticleComponent implements OnInit {
  constructor(private tokenStorage: TokenStorageService,public dialog: MatDialog,private serviceAncienEtudiant:AncienEtudiantService,private _snackBar: MatSnackBar, private router: Router, private service: ArticleService) { }
  testAncien:boolean=false;

ancienEtd!:AncienEtudiant;
  articles!: Article[];
  testArticle:boolean=false;
  isLoggedIn = false;

  getAllArticle() {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    if (this.isLoggedIn) {
    const currentUser = this.tokenStorage.getUser();
    this.service.getAllArticle().subscribe(data => {
      this.articles = data;
if(this.articles!=null){
  this.testArticle=true;
  
}
    

    },
   error=>{
     if(error.status==404){
        this.testArticle=false;
     }
        }
    );}
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    if (this.isLoggedIn) {
    const currentUser = this.tokenStorage.getUser();
    this.getAllArticle();
 
      
     }}
     ajouterArticle(){
     
     
      const dialogRef = this.dialog.open(DialogAddArticleComponent, {
          
        data: {}
      });
      dialogRef.componentInstance.articleadded.subscribe(() => {
        // Reload data in the table
        this.getAllArticle();
      });
    
   
   

  }
  }


