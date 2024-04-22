import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/authentication/token-storage.service';

import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from 'src/app/snack-bar/snack-bar.component';
import { Article } from 'src/app/models/article';
import { AncienEtudiantService } from 'src/app/_services/AncienEtudiantService/ancien-etudiant.service';
import { ArticleService } from 'src/app/_services/ArticleService/article.service';
import { DialogAddArticleComponent } from '../dialog-add-article/dialog-add-article.component';
import { DialogUpdateArticleComponent } from '../dialog-update-article/dialog-update-article.component';

@Component({
  selector: 'app-gestion-article',
  templateUrl: './gestion-article.component.html',
  styleUrls: ['./gestion-article.component.css']
})
export class GestionArticleComponent implements OnInit {

  message:string="";
  classColor:any;
  
  testArticle:boolean=false;
  articles: Article[] = [];
  isLoggedIn = false;

  article!:Article;
  displayedColumns: string[] = ['id', 'title', 'actions'];
  dataSourceArticle: any;
  
  @ViewChild(MatPaginator) paginatorArticle!: MatPaginator;
  resultsLengthArticle = 0;

  constructor(private tokenStorage: TokenStorageService,private serviceAncienEtudiant:AncienEtudiantService,private _snackBar: MatSnackBar, public dialog: MatDialog,private router: Router, private service: ArticleService) { }

  getAllArticle() {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    if (this.isLoggedIn) {
    const currentUser = this.tokenStorage.getUser();
    this.service.getArticlesByAncienEtudiantI(currentUser.email).subscribe(data => {
      this.articles = data;
if(this.articles!=null){
  this.testArticle=true;
  this.dataSourceArticle = new MatTableDataSource(this.articles);
  this.resultsLengthArticle = this.articles.length;
  this.dataSourceArticle.paginator = this.paginatorArticle;
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
 
      
     }
  }
  /*applyFilterArticle(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceArticle.filter = filterValue.trim().toLowerCase();

  }*/
  applyFilterArticle(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    const customFilter = (data: Article) => {
      const articleInfo = data.title.toLowerCase();
      return articleInfo.includes(filterValue.trim().toLowerCase());
    };
  
    this.dataSourceArticle.filter = filterValue.trim().toLowerCase();
    this.dataSourceArticle.filterPredicate = customFilter;
  }
  deleteArticle(id: number) {
    this.service.deleteArticle(id).subscribe(() => {
      
      this.message="Article supprimée avec succès";
      this.classColor='success';
      this.openSnackBar();
      this.getAllArticle();
    });

  }
 
    modifierArticle(id:number) {
      this.service.getArticleById(id).subscribe((data)=>{
        this.article=data;
        if(this.article!=null){
        const dialogRef = this.dialog.open(DialogUpdateArticleComponent, {
          
          data: {article:this.article}
        });
        /*dialogRef.afterClosed().subscribe(result => {
          this.getAllArticle();
         
        });*/
        dialogRef.componentInstance.articleUpdated.subscribe(() => {
          // Reload data in the table
          this.getAllArticle();
        });}
      },
      error=>{
        if(error.status==404){
          this.message="article non trouvée";
          this.classColor="danger";
          this.openSnackBar();
        }
      })
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
