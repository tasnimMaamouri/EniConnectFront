import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  host = "http://localhost:8281/GArticle";

  constructor(private client :HttpClient) { }

  public getAllArticle():Observable<Article[]>{return this.client.get<Article[]>(this.host+"/AllArticle");}
  public getArticleById(id:number):Observable<Article>{return this.client.get<Article>(this.host+"/Article/"+id);}
  public getArticlesByAncienEtudiantI(email:string):Observable<Article[]>{return this.client.get<Article[]>(this.host+"/ArticleByAncienEtudiantI/"+email);}

  public addArticle(article:Article):Observable<Article>{return this.client.post<Article>(this.host+"/AddArticle",article);}
  public updateArticle(article:Article,id:number):Observable<Article>{return this.client.put<Article>(this.host+"/UpdateArticle/"+id,article);}
  public deleteArticle(id:number):Observable<void>{return this.client.delete<void>(this.host+"/DeleteArticle/"+id);}
}
