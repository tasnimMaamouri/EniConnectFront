import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from 'src/app/models/utilisateur';
@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  host = 'http://localhost:8281/GUtilisateur';
  constructor(private client: HttpClient) { }

  public getUtilisateurByEmail(email: string): Observable<Utilisateur> { return this.client.get<Utilisateur>(this.host + "/UtilisateurByEmail/" + email) }
  public updateUtilisateur(id: number, ancienneMotDePasse:string,utilisateur: Utilisateur,): Observable<Utilisateur> {  const url = `${this.host}/UpdateUtilisateur/${id}/${ancienneMotDePasse}`;
  console.log('Request URL:', url);
  return this.client.put<Utilisateur>(url, utilisateur);}
  public refreshMotDePasse(id: number, utilisateur: Utilisateur): Observable<Utilisateur> { return this.client.put<Utilisateur>(this.host + "/RefreshMotDePasse/" + id, utilisateur) }
  public sendEmail(to: string,subject:string,text:string): Observable<void> {
    return this.client.post<void>(this.host + "/SendMail/"+to+"/"+text,subject);
  }
}
