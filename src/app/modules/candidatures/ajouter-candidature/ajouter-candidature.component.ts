import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouter-candidature',
  templateUrl: './ajouter-candidature.component.html',
  styleUrls: ['./ajouter-candidature.component.css']
})
export class AjouterCandidatureComponent implements OnInit {

  constructor() { }
  etatsDisponibles: string[] = ['En attente', 'Acceptée', 'Refusée'];


  ngOnInit(): void {
  }

}
