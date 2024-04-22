import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AncienEtudiant } from 'src/app/models/AncienEtudiant';

@Injectable({
  providedIn: 'root'
})
export class AncienEtudiantService {

  
  host = "http://localhost:8281/GAncienEtudiant";

  constructor(private client: HttpClient) { }

  public getAllAncienEtudiants(): Observable<AncienEtudiant[]> { return this.client.get<AncienEtudiant[]>(this.host + "/AllAncienEtudiant"); }

  public getAncienEtudiantById(id: number): Observable<AncienEtudiant> { return this.client.get<AncienEtudiant>(this.host + "/AncienEtudiant/" + id) }
  public getAncienEtudiantByEmail(email: string): Observable<AncienEtudiant> { return this.client.get<AncienEtudiant>(this.host + "/AncienEtudiantByEmail/" + email) }

  public deleteAncienEtudiant(id: number): Observable<void> { return this.client.delete<void>(this.host + "/DeleteAncienEtudiant/" + id) }
  public updateAncienEtudiant(id: number, ancienEtudiant: AncienEtudiant): Observable<AncienEtudiant> { return this.client.put<AncienEtudiant>(this.host + "/UpdateAncienEtudiant/" + id, ancienEtudiant) }
  public addAncienEtudiant(ancienEtudiant: AncienEtudiant):Observable<AncienEtudiant> {
    return this.client.post<AncienEtudiant>(this.host + "/AddAncienEtudiant", ancienEtudiant);
  }
}
