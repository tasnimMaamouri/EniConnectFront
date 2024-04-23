import { Component, OnInit } from '@angular/core';
import { Candidature } from 'src/app/models/Candidature';
import { CandidatureService } from 'src/app/_services/CandidatureService/candidature-ser.service';
@Component({
  selector: 'app-page-candidature',
  templateUrl: './page-candidature.component.html',
  styleUrls: ['./page-candidature.component.css']
})
export class PageCandidatureComponent implements OnInit {
 

  constructor(private candidatureService: CandidatureService) { }

  ngOnInit(): void {
  }

}
