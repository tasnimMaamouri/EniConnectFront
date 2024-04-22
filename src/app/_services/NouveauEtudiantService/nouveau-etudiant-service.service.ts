import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NouveauEtudiant } from 'src/app/models/NouveauEtudiant'; 

@Injectable({
  providedIn: 'root'
})
export class NouveauEtudiantService {
  host = 'http://localhost:8281/GNouveauEtudiant';

  constructor(private client: HttpClient) { }

  public affecterCandidatureAEtudiant(idC: number, idE: number): Observable<void> {
    return this.client.put<void>(`${this.host}/AffecterCandidatureAEtudiant/${idC}/${idE}`, {});
  }

  public uploadCV(etudiantId: number, file: File): Observable<string> {
    const formData = new FormData();
    formData.append('file', file);

    return this.client.post<string>(`${this.host}/${etudiantId}/cv/upload`, formData);
  }

  public downloadCV(etudiantId: number): Observable<Blob> {
    return this.client.get(`${this.host}/${etudiantId}/cv/download`, { responseType: 'blob' });
  }

  public getAllEtudiants(): Observable<NouveauEtudiant[]> {
    return this.client.get<NouveauEtudiant[]>(this.host);
  }

  public getNouveauEtudiantById(id: number): Observable<NouveauEtudiant> {
    return this.client.get<NouveauEtudiant>(`${this.host}/${id}`);
  }

  public createNouveauEtudiant(etudiant: NouveauEtudiant): Observable<NouveauEtudiant> {
    return this.client.post<NouveauEtudiant>(this.host, etudiant);
  }

  public updateNouveauEtudiant(etudiant: NouveauEtudiant): Observable<NouveauEtudiant> {
    return this.client.put<NouveauEtudiant>(`${this.host}/updateNouveauEtudiant`, etudiant);
  }

  public deleteNouveauEtudiant(id: number): Observable<void> {
    return this.client.delete<void>(`${this.host}/${id}`);
  }
}
