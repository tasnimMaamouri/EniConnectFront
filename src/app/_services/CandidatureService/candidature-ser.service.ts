import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidature } from 'src/app/models/Candidature';
@Injectable({
  providedIn: 'root'
})
export class CandidatureService {
  private host = 'http://localhost:8281/GCandidature'; 

  constructor(private httpClient: HttpClient) { }

  getAllCandidatures(): Observable<Candidature[]> {
    return this.httpClient.get<Candidature[]>(this.host);
  }

  getCandidatureById(id: number): Observable<Candidature> {
    return this.httpClient.get<Candidature>(`${this.host}/${id}`);
  }

  createCandidature(candidature: Candidature): Observable<Candidature> {
    return this.httpClient.post<Candidature>(this.host, candidature);
  }

  updateCandidature(candidature: Candidature): Observable<Candidature> {
    return this.httpClient.put<Candidature>(`${this.host}/updateCandidature`, candidature);
  }

  deleteCandidature(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.host}/${id}`);
  }
}
